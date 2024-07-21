export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const SET_SELECTED_SYMBOL = "SET_SELECTED_SYMBOL";

export interface StockData {
  symbol: string;
  price: number;
  timestamp: string;
}

export interface AppState {
  loading: boolean;
  data: StockData[];
  error: string | null;
  selectedSymbol: string;
}

interface FetchDataRequestAction {
  type: typeof FETCH_DATA_REQUEST;
}

interface FetchDataSuccessAction {
  type: typeof FETCH_DATA_SUCCESS;
  payload: StockData[];
}

interface FetchDataFailureAction {
  type: typeof FETCH_DATA_FAILURE;
  payload: string;
}

interface SetSelectedSymbolAction {
  type: typeof SET_SELECTED_SYMBOL;
  payload: string;
}

export type AppActionTypes =
  | FetchDataRequestAction
  | FetchDataSuccessAction
  | FetchDataFailureAction
  | SetSelectedSymbolAction;
