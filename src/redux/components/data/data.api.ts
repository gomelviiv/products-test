import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Products } from "./__types__";

export const productsApi = createApi({
  reducerPath: "products/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    getProducts: build.query<Products, void>({
      query: () => ({
        url: "products",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
