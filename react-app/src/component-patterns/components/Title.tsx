import { useContext } from "react";
import { ProductContext } from "./ProductCard";

export const Title = ({ className }: { className?: string }) => {
  const { product } = useContext(ProductContext);
  return <span className={`${className} mx-2`}>{product.title}</span>;
};
