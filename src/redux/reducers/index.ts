import { combineReducers } from "redux";
import { productsApi } from "../components/data/data.api";

const reducers = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
});

export default reducers;
