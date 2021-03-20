/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vH",
    display: "flex",
    flexDirection: "column",
  },
  main: {
    flexGrow: 1,
    width: "100%",
  },
  footer: {
    color: "#fff",
    background: theme.palette.primary.main,
    marginTop: `2rem`,
    width: "100%",
    textAlign: "center",
    padding: 5,
    fontSize: 12,
  },
}))

const Layout = ({ children }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Header />
      <main className={classes.main}>{children}</main>
      <footer className={classes.footer}>
        © {new Date().getFullYear()} Butler Web Development
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
