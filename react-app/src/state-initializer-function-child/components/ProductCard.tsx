import { useProducts } from "../hooks/useProducts";

import styles from "../styles/styles.module.css";
import { createContext } from "react";

import {
  ProdContextProps,
  ProductCardProps,
} from "../interfaces/product.interfaces";

export const ProductContext = createContext({} as ProdContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  product,
  children,
  className,
  onChange,
  initialValues,
}: ProductCardProps) => {
  const { increaseBy, counter, isMaxCountReached, reset } = useProducts({
    onChange,
    product,
    initialValues,
  });

  return (
    <Provider
      value={{
        product,
        increaseBy,
        count: counter,
        initialValues: initialValues ?? {},
      }}
    >
      <div className={`${styles.productCard}  ${className}`}>
        {children({
          count: counter,
          increaseBy,
          maxCount: initialValues?.maxCount,
          product,
          isMaxCountReached,
          reset,
        })}
      </div>{" "}
    </Provider>
  );
};
