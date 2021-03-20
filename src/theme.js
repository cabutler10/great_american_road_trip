import { createMuiTheme } from "@material-ui/core/styles"

const primary = "#763242"
const secondary = "#C09F7F"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
  },
  color: {
    tan: "#D9CECB",
    gray: "#565656",
  },
})

export default theme
