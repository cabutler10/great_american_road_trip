import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Hidden from "@material-ui/core/Hidden"
// import LatestPosts from "./LatestPosts"
// import PopularPosts from "./PopularPosts"
import InstagramWidget from "../instagram/InstagramWidget"

const useStyles = makeStyles(theme => ({
  paper: {
    padding: 15,
    marginBottom: 30,
    boxShadow: "0 0 70px rgba(0,0,0,.11)",
    [theme.breakpoints.up("lg")]: {
      padding: 30,
    },
  },
  title: {
    textAlign: "center",
    textTransform: "uppercase",
    margin: "0 0 15px 0",
  },
  img: { width: "100%", margin: "0 auto", marginBottom: 30 },
  text: {
    textAlign: "center",
  },
  link: {
    color: theme.palette.primary.main,
    paddingLeft: 5,
  },
  mobileContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  flexItem: {
    flexBasis: "48%",
  },
}))

export default function Sidebar() {
  const classes = useStyles()

  return (
    <>
      <Paper className={classes.paper} square elevation={0}>
        <p className={classes.title}>About</p>
        <div className={classes.imgContainer}>
          <StaticImage
            src="../../images/about.jpg"
            alt="author"
            className={classes.img}
          />
        </div>
        <p className={classes.text}>About</p>
      </Paper>

      {/* <Paper className={classes.paper} square elevation={0}>
        <p className={classes.title}>{t("common.subscribe")}</p>
      </Paper> */}
      <Hidden smDown mdUp>
        <div className={classes.mobileContainer}>
          <Paper
            className={clsx(classes.paper, classes.flexItem)}
            square
            elevation={0}
          >
            <p className={classes.title}>Latest</p>
            {/* <LatestPosts /> */}
          </Paper>

          <Paper
            className={clsx(classes.paper, classes.flexItem)}
            square
            elevation={0}
          >
            <p className={classes.title}>Popular</p>
            {/* <PopularPosts /> */}
          </Paper>
        </div>
      </Hidden>

      <Hidden only="sm">
        <Paper className={classes.paper} square elevation={0}>
          <p className={classes.title}>Latest</p>
          {/* <LatestPosts /> */}
        </Paper>

        <Paper className={classes.paper} square elevation={0}>
          <p className={classes.title}>Popular</p>
          {/* <PopularPosts /> */}
        </Paper>
      </Hidden>

      <Paper className={classes.paper} square elevation={0}>
        <p className={classes.title}>Instagram</p>
        <InstagramWidget />
      </Paper>
    </>
  )
}
