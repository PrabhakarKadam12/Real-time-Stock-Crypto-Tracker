import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface StockState {
  data: any[];
  symbol: string;
}

const initialState: StockState = {
  data: ["bitcoin", "ethereum", "ripple", "litecoin", "cardano"],
  symbol: "bitcoin",
};

export const fetchStockData = createAsyncThunk(
  "stock/fetchStockData",
  async (symbol: string) => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/data/${symbol}`
    );
    return response.data;
  }
);

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    setSymbol(state, action) {
      state.symbol = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStockData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const { setSymbol } = stockSlice.actions;
export default stockSlice.reducer;
