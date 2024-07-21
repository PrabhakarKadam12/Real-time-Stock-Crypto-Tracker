import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSelectedSymbol } from "../redux/actions";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
});

const Modal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [symbol, setSymbol] = useState("bitcoin");
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    dispatch(setSelectedSymbol(symbol));
    handleClose();
  };

  return (
    <>
      <div className={classes.buttonContainer}>
        <Button variant="outlined" color="primary" onClick={handleOpen}>
          Change Symbol
        </Button>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Change Stock or Crypto Symbol</DialogTitle>
        <DialogContent>
          <FormControl fullWidth>
            <InputLabel>Symbol</InputLabel>
            <Select
              value={symbol}
              onChange={(e) => setSymbol(e.target.value as string)}
            >
              <MenuItem value="bitcoin">Bitcoin</MenuItem>
              <MenuItem value="ethereum">Ethereum</MenuItem>
              <MenuItem value="ripple">Ripple</MenuItem>
              <MenuItem value="litecoin">Litecoin</MenuItem>
              <MenuItem value="cardano">Cardano</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Modal;
