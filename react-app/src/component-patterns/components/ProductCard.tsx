import { useProducts } from "../hooks/useProducts";

import styles from "../styles/styles.module.css";
import { createContext } from "react";

import {
  ProdContextProps,
  PoductCardProps,
} from "../interfaces/product.interfaces";

export const ProductContext = createContext({} as ProdContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  product,
  children,
  className,
  onChange,
  value,
}: PoductCardProps) => {
  const { increaseBy, counter } = useProducts({
    onChange,
    product,
    value: value ?? 0,
  });

  return (
    <div className={`${styles.productCard}  ${className}`}>
      <Provider value={{ product, increaseBy, count: counter }}>
        {children}
      </Provider>
    </div>
  );
};
