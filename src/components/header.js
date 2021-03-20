import * as React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: "none",
  },
  title: {
    color: "#fff",
  },
  appbar: {
    boxShadow: "none",
  },
}))

export default function Header() {
  const classes = useStyles()

  return (
    <AppBar
      position="static"
      color="primary"
      classes={{ root: classes.appbar }}
    >
      <Toolbar>
        <Link to="/" className={classes.link}>
          <Typography variant="h6" className={classes.title}>
            Jeanne's Great American Road Trip
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  )
}
