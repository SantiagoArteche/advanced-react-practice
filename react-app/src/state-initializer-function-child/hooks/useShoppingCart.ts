import { useState } from "react";
import { ProductInCart, Product } from "../interfaces/product.interfaces";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart(() => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = shoppingCart;
        console.log(toDelete);
        return rest;
      }
      return {
        ...shoppingCart,
        [product.id]: { ...product, count },
      };
    });
  };
  return { onProductCountChange, shoppingCart };
};
