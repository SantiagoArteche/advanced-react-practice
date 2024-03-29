import { ProductCard as ProductCardHOC } from "./ProductCard";

import { ProdImage } from "./ProdImage";
import { Buttons } from "./Buttons";
import { Title } from "./Title";
import { ProductCardChildrens } from "../interfaces/product.interfaces";

export { ProdImage } from "./ProdImage";
export { Buttons } from "./Buttons";
export { Title } from "./Title";
export { ProductCard as ProductCardHOC } from "./ProductCard";

export const ProductCard: ProductCardChildrens = Object.assign(ProductCardHOC, {
  Title,
  Buttons,
  Image: ProdImage,
});

export default ProductCard;
