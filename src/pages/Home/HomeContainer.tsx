import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { FC } from "react";
import { useGetProductsQuery } from "../../redux/components/data/data.api";
import { Product } from "../../redux/components/data/__types__";
import Spinner from "../../shared/Spinner";
import Home from "./Home";

const HomeContainer: FC = () => {
  const [fetchProducts, setFetchProducts] = useState<Product[]>([]);
  const [filteredProduct, setFilteredProduct] = useState<Product[]>([]);
  const [category, setCategory] = useState<string[]>([]);
  const { data, isLoading, isSuccess, isError } = useGetProductsQuery();

  useEffect(() => {
    if (isSuccess) {
      setFetchProducts(data.products);
      setCategory([
        ...new Set([
          ...(data.products
            ? data.products.map((product) => product.category)
            : []),
        ]),
      ]);
    }
  }, [isSuccess]);

  const filterDate = useCallback(
    (type: string) => {
      setFilteredProduct(fetchProducts.filter((el) => el.category === type));
    },
    [fetchProducts]
  );

  return (
    <>
      {isLoading && <Spinner />}
      {isError && <p>Something wrong!</p>}
      {isSuccess && (
        <Home
          category={category}
          filteredProduct={filteredProduct}
          filterDate={filterDate}
        />
      )}
    </>
  );
};

export default HomeContainer;
