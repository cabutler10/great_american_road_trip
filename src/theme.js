import { createMuiTheme } from "@material-ui/core/styles"

const primary = "#0000FF"
const secondary = "#000080"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
  },
})

export default theme
