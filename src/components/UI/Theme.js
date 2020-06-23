import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const theme = responsiveFontSizes(
  createMuiTheme({
    mixins: {
      toolbar: {
        height: 56,
      },
    },
  })
);

export default theme;
