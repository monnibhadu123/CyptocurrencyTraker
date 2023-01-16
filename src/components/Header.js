import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
  ThemeProvider
} from "@material-ui/core";
import { createTheme, makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import React from "react";
import { CryptoState } from "../CryptoContext";
// import { ThemeProvider } from "@mui/material";

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer"
  }
}));

const darkTheme = createTheme({
  palette: {
    primar: {
      main: "#fff"
    },
    type: "dark"
  }
});

const Header = () => {
  const classes = useStyles();
  const { currency, setCurrency } = CryptoState();
  // console.log(currency);
  const history = useHistory();

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => history.push("/")}
              className={classes.title}
            >
              Crypyo Hunter
            </Typography>

            <Select
              variant="outlined"
              style={{
                width: 100,
                height: 40,
                marginRight: 15
              }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default Header;
