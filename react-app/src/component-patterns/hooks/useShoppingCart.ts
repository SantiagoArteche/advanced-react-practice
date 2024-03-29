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
      const productInCart: ProductInCart = shoppingCart[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;

        return { ...shoppingCart, [product.id]: productInCart };
      }

      const { [product.id]: toDelete, ...rest } = shoppingCart;
      console.log(toDelete);
      return rest;

      // if (count === 0) {
      //   const { [product.id]: toDelete, ...rest } = shoppingCart;
      //   console.log(toDelete);
      //   return rest;
      // }
      // return {
      //   ...shoppingCart,
      //   [product.id]: { ...product, count },
      // };
    });
  };
  return { onProductCountChange, shoppingCart };
};
