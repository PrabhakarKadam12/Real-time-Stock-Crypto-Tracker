import axios from "axios";
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  SET_SELECTED_SYMBOL,
  AppActionTypes,
  StockData,
} from "./types";
import { Dispatch } from "redux";

export const fetchData = (symbol: string) => {
  return async (dispatch: Dispatch<AppActionTypes>) => {
    dispatch({ type: FETCH_DATA_REQUEST });

    try {
      const response = await axios.get<StockData[]>(
        `http://localhost:5000/api/data/${symbol}`
      );
      dispatch({
        type: FETCH_DATA_SUCCESS,
        payload: response.data,
      });
    } catch (error: any) {
      dispatch({
        type: FETCH_DATA_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const setSelectedSymbol = (symbol: string): AppActionTypes => {
  return {
    type: SET_SELECTED_SYMBOL,
    payload: symbol,
  };
};
