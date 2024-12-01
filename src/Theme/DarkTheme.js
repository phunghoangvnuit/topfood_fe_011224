const { createTheme } = require("@mui/material");

export const darkTheme = createTheme({
  palette:{
    mode: "dark",
    primary:{
      main: "#ed1b24"
    },
    secondary:{
      main: "#5A20CB"
    },
    black:{
      main: "#0D0D0D"
    },
    background:{
      main: "#FFFFFF",
      default: "#FFFFFF",
      paper: "#0D0D0D"
    },
    textColor:{
      main: "#000000"
    }
  }
})