import { createMuiTheme } from "@material-ui/core/styles";

const primary = 'blue'
const secondary ="green"

const theme = createMuiTheme({
    palette: {
      primary: {
        main: primary,
      },
      secondary: {
        main: secondary,
      },
    },
});

export default theme;