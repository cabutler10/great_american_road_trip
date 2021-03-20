import React, { Fragment } from "react"
import clsx from "clsx"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby-theme-material-ui"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import Hidden from "@material-ui/core/Hidden"
import Button from "@material-ui/core/Button"
import Sidebar from "./Sidebar"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"

const useStyles = makeStyles(theme => ({
  banner: {
    height: 150,
    [theme.breakpoints.up("sm")]: {
      height: 300,
    },
  },
  bannerImg: {
    width: "100%",
    height: "100%",
  },
  header: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    borderBottom: `1px solid ${theme.color.tan}`,
  },
  headerItem: {
    flexBasis: "100%",
    textTransform: "lowercase",
    padding: 10,
    textAlign: "center",
    color: theme.color.black,
    "&:hover": {
      color: theme.palette.primary.main,
      textDecoration: "none",
    },
    [theme.breakpoints.up("sm")]: {
      flexBasis: "auto",
      padding: 15,
      textAlign: "right",
    },
  },
  headerItemActive: {
    color: theme.palette.primary.main,
  },
  subMenu: {
    fontFamily: "secondary",
    fontSize: 28,
    margin: 10,
    lineHeight: 1,
  },
  paper: {
    padding: 15,
    marginBottom: 30,
    boxShadow: "0 0 70px rgba(0,0,0,.11)",
    [theme.breakpoints.up("sm")]: {
      padding: 60,
    },
  },
  link: {
    marginBottom: 30,
    textAlign: "center",
    background: theme.color.black,
    color: "#FFF",
    opacity: 0.6,
    padding: "30px 90px",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
  blog: {
    display: "flex",
    flexDirection: "column",
    flexBasis: "100%",
    marginBottom: 30,
    [theme.breakpoints.up("md")]: {
      flexBasis: "65%",
      marginBottom: 0,
    },
    [theme.breakpoints.up("lg")]: {
      flexBasis: "70%",
    },
  },
  sidebar: {
    display: "flex",
    flexDirection: "column",
    flexBasis: "100%",
    [theme.breakpoints.up("md")]: {
      flexBasis: "30%",
    },
    [theme.breakpoints.up("lg")]: {
      flexBasis: "25%",
    },
  },
  blogItem: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: 30,
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      marginBottom: 45,
    },
  },
  blogImgLink: {
    width: "100%",
    height: 300,
    "&:hover": {
      textDecoration: "none",
    },
    [theme.breakpoints.up("sm")]: {
      width: 300,
      height: 250,
    },
  },
  blogImg: {
    width: "100%",
    height: 300,
    [theme.breakpoints.up("sm")]: {
      width: 300,
      height: 250,
    },
  },
  blogImgFirst: {
    width: "100%",
    height: 150,
    [theme.breakpoints.up("sm")]: {
      height: 500,
    },
  },
  blogDate: {
    letterSpacing: 3,
    textTransform: "uppercase",
    marginBottom: 5,
  },
  blogExcerptRight: {
    padding: 15,
    zIndex: 2,
    width: "100%",
    boxShadow: "0 0 70px rgba(0,0,0,.11)",
    [theme.breakpoints.up("sm")]: {
      padding: 30,
      marginRight: -80,
    },
  },
  blogExcerptLeft: {
    padding: 15,
    width: "100%",
    zIndex: 2,
    boxShadow: "0 0 70px rgba(0,0,0,.11)",
    [theme.breakpoints.up("sm")]: {
      padding: 30,
      marginLeft: -80,
    },
  },
  blogTitleLink: {
    color: theme.color.black,
    "&:hover": {
      color: theme.palette.primary.main,
      textDecoration: "none",
    },
  },
  blogTitle: {
    fontWeight: 600,
    marginBottom: 15,
    fontSize: 14,
    [theme.breakpoints.up("sm")]: {
      fontSize: 16,
      letterSpacing: 3,
    },
  },
  categories: {
    color: theme.palette.primary.dark,
    fontWeight: 700,
  },
  pagination: {
    display: "flex",
    justifyContent: "space-between",
  },
  paginationButton: {
    color: theme.color.black,
    background: theme.palette.primary.main,
    padding: "9px 27px",
    textTransform: "uppercase",
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: 3,
    display: "flex",
    alignItems: "center",
    "&:hover": {
      textDecoration: "none",
      background: theme.palette.primary.dark,
    },
  },
  paginationNumberContainer: {
    flexBasis: "30%",
    display: "flex",
    justifyContent: "center",
  },
  paginationNumber: {
    color: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`,
    width: 42,
    height: 42,
    marginLeft: 5,
    marginRight: 5,
    textTransform: "uppercase",
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      textDecoration: "none",
      color: theme.color.black,
      background: theme.palette.primary.dark,
      border: `1px solid ${theme.palette.primary.dark}`,
    },
  },
  paginationNumberActive: {
    background: theme.palette.primary.main,
    color: theme.color.black,
    "&:hover": {
      textDecoration: "none",
      background: theme.palette.primary.dark,
    },
  },
  placeholder: {
    width: 130,
  },
  readMore: {
    textDecoration: "none",
    textTransform: "uppercase",
    color: theme.palette.primary.dark,
    "&:hover": {
      background: theme.palette.primary.main,
    },
  },
  imgContainer: {
    position: "relative",
  },
  buttonContainer: {
    position: "absolute",
    bottom: "0%",
    left: "0%",
    padding: 30,
  },
}))

const Blog = ({ posts }) => {
  const classes = useStyles()
  const [currentPage, setCurrentPage] = React.useState(0)

  const numPages = posts.length

  return (
    <>
      <div className={classes.blog}>
        {posts &&
          posts.map((elem, idx) =>
            idx === 0 ? (
              <Paper
                className={classes.paper}
                square
                elevation={0}
                key={`post_${idx}`}
              >
                <Typography
                  className={clsx(classes.blogDate, classes.categories)}
                >
                  Travel
                </Typography>
                <Link to={elem.node.slug} className={classes.blogTitleLink}>
                  <Typography className={classes.blogTitle}>
                    {elem.node.title}
                  </Typography>
                </Link>
                <div className={classes.imgContainer}>
                  <GatsbyImage
                    image={getImage(elem.node.featuredImage)}
                    alt={elem.node.slug}
                  />
                  <div className={classes.buttonContainer}>
                    <Link to={elem.node.slug} className={classes.blogImgLink}>
                      <Button variant="contained" color="primary">
                        Read More
                      </Button>
                    </Link>
                  </div>
                </div>
                <p>{elem.node.excerpt.excerpt}</p>
              </Paper>
            ) : (
              <Fragment key={`post_${idx}`}>
                <div className={classes.blogItem} key={`blogItem_${idx}`}>
                  <Fragment key={`blog_${elem.node.title}`}>
                    <Link to={elem.node.slug} className={classes.blogImgLink}>
                      <GatsbyImage
                        image={getImage(elem.node.featuredImage)}
                        alt={`blog image ${idx}`}
                        className={classes.blogImg}
                      />
                    </Link>
                    <Paper
                      className={
                        idx % 2 !== 0
                          ? classes.blogExcerptLeft
                          : classes.blogExcerptRight
                      }
                      square
                      elevation={0}
                    >
                      {/* <Typography
                        className={clsx(classes.blogDate, classes.categories)}
                      >
                        {elem.node.frontmatter.tags
                          ? elem.node.frontmatter.tags[0]
                          : ""}
                      </Typography> */}
                      <Link
                        to={elem.node.slug}
                        className={classes.blogTitleLink}
                      >
                        <Typography className={classes.blogTitle}>
                          {elem.node.title}
                        </Typography>
                      </Link>
                      <p>{elem.node.excerpt.excerpt}</p>
                      <Link to={elem.node.slug} className={classes.readMore}>
                        <Button variant="contained" color="primary">
                          Read More
                        </Button>
                      </Link>
                    </Paper>
                    <Hidden xsDown>
                      {idx % 2 === 0 && (
                        <Link
                          to={elem.node.slug}
                          className={classes.blogImgLink}
                        >
                          <GatsbyImage
                            image={getImage(elem.node.featuredImage)}
                            alt={`blog image ${idx}`}
                            className={classes.blogImg}
                          />
                        </Link>
                      )}
                    </Hidden>
                  </Fragment>
                </div>
              </Fragment>
            )
          )}
        {/* {currentPage && numPages > 1 && (
          <div className={classes.pagination}>
            {currentPage !== 1 ? (
              <Link
                to={`/blog/${currentPage - 1}`}
                rel="prev"
                className={classes.paginationButton}
              >
                <ChevronLeftIcon className={classes.marginRight} />
                Previous
              </Link>
            ) : (
              <div className={classes.placeholder} />
            )}
            <div className={classes.paginationNumberContainer}>
              {new Array(numPages).fill(0).map((e, idx) => (
                <Link
                  to={idx === 0 ? "/blog" : `/blog/${idx + 1}`}
                  rel={idx}
                  className={clsx(classes.paginationNumber, {
                    [classes.paginationNumberActive]: idx + 1 === currentPage,
                  })}
                  key={`blogPage${idx}`}
                >
                  {idx + 1}
                </Link>
              ))}
            </div>
            {currentPage !== numPages ? (
              <Link
                to={`/blog/${currentPage + 1}`}
                rel="next"
                className={classes.paginationButton}
              >
                Next
                <ChevronRightIcon className={classes.marginLeft} />
              </Link>
            ) : (
              <div className={classes.placeholder} />
            )}
          </div>
        )} */}
      </div>
      <div className={classes.sidebar}>
        <Sidebar />
      </div>
    </>
  )
}

export default Blog
