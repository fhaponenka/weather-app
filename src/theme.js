import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  typography: {
    fontSize: 16,
  },
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
  containerWidth: 650,
  breakpoints: {
    values: {
      sm: 650,
    },
  },
});

theme.typography.h1 = {
  fontSize: "2rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "2rem",
  },
};


theme.typography.h4 = {
  fontSize: "1.5rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.8rem",
  },
};

theme.typography.h5 = {
  fontSize: "1.3rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.6rem",
  },
};

theme.typography.h6 = {
  fontSize: "1.2rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.5rem",
  },
};

export default theme;
