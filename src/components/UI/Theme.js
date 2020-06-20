import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

export default responsiveFontSizes(
  createMuiTheme({
    // palette: {
    //   type: "dark",
    // },
    mixins: {
      toolbar: {
        height: 56,
      },
    },
  })
);
