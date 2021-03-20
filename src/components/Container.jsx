import * as React from "react"
import { makeStyles } from "@material-ui/styles"
import clsx from "clsx"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    width: "100%",
    padding: 15,
    [theme.breakpoints.up("sm")]: {
      padding: `30px 45px`,
    },
    [theme.breakpoints.up("lg")]: {
      padding: `30px 60px`,
    },
    [theme.breakpoints.up("xl")]: {
      width: 1440,
      padding: `60px 0`,
    },
  },
}))

export default function Container({ children, className: classNameProp }) {
  const classes = useStyles()

  return (
    <div className={clsx(classes.container, classNameProp)}>{children}</div>
  )
}
