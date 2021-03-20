import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby-theme-material-ui"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import FavoriteIcon from "@material-ui/icons/Favorite"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  flexItem: {
    color: "#FFF",
    flexBasis: "30%",
    position: "relative",
    textAlign: "center",
    background: theme.color.black,
    "&:hover $img": {
      opacity: 0.4,
    },
    "&:hover $overlay": {
      opacity: 1,
    },
  },
  img: {
    width: "100%",
    opacity: 1,
  },
  marginBottom: {
    marginBottom: 15,
  },
  overlay: {
    position: "absolute",
    width: "100%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    opacity: 0,
  },
  likesContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#FFF",
  },
  likes: {
    color: "#FFF",
    fontWeight: 700,
  },
}))

const InstagramWidget = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 6) {
        edges {
          node {
            likes
            id
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 200
                  height: 200
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
                )
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div className={classes.root}>
      {data?.allInstaNode.edges.map((elem, idx) => (
        <Link
          key={`instagram_photo_${idx}`}
          className={clsx(classes.flexItem, {
            [classes.marginBottom]: idx < 3,
          })}
          href={`https://www.instagram.com/p/${elem.node.id}/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GatsbyImage
            image={getImage(
              elem.node.localFile.childImageSharp.gatsbyImageData
            )}
            alt={`instagram ${idx}`}
          />
          <div className={classes.overlay}>
            <div className={classes.likesContainer}>
              <FavoriteIcon className={classes.icon} />
              <div className={classes.likes}>{elem.node.likes}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default InstagramWidget
