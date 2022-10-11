import { productsApi } from "../components/data/data.api";

const setMiddleware = () => {
  return (getDefaultMiddleware: any) =>
    getDefaultMiddleware({}).concat(productsApi.middleware);
};

export default setMiddleware;
