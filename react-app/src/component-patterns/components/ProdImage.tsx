import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";
export const ProdImage = () => {
  const { product } = useContext(ProductContext);
  return (
    <img
      src={`${product.img ? product.img : noImage}`}
      alt="CoffeImg"
      className={styles.productImg}
    />
  );
};
