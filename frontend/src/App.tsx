import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import DataTable from "./components/DataTable";
import Modal from "./components/Modal";
import {
  Container,
  Typography,
  AppBar,
  Toolbar,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
  content: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    padding: 20,
  },
});

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar style={{ justifyContent: "center" }}>
            <Typography variant="h6">Real-time Stock/Crypto Tracker</Typography>
          </Toolbar>
        </AppBar>
        <Container className={classes.content}>
          <Modal />
          <DataTable />
        </Container>
      </div>
    </Provider>
  );
};

export default App;
