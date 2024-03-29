import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";
export const ProdImage = ({ img = "" }) => {
  const { product } = useContext(ProductContext);

  return (
    <img
      src={`${img ? img : product.img ? product.img : noImage}`}
      alt="CoffeImg"
      className={styles.productImg}
    />
  );
};
