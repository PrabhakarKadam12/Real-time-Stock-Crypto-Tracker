import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  SET_SELECTED_SYMBOL,
  AppActionTypes,
  AppState,
} from "./types";

const initialState: AppState = {
  loading: false,
  data: [],
  error: null,
  selectedSymbol: "bitcoin",
};

const rootReducer = (
  state = initialState,
  action: AppActionTypes
): AppState => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true };
    case FETCH_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: null };
    case FETCH_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case SET_SELECTED_SYMBOL:
      return { ...state, selectedSymbol: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
