import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
  imgContainer: {
    width: "100%",
    maxHeight: 200,
    overflow: "hidden",
  },
}))

export default function Hero() {
  const classes = useStyles()

  return (
    <div className={classes.imgContainer}>
      <StaticImage
        src="../images/hero.jpg"
        alt="highway"
        placeholder="blurred"
        layout="fullWidth"
      />
    </div>
  )
}
