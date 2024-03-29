import ProductCard from "../components";

import "../styles/custom-styles.css";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";

export const ShoppingPage = () => {
  const { onProductCountChange, shoppingCart } = useShoppingCart();
  return (
    <div>
      <h1>ShoppingStore</h1>
      <hr />
      <div className="flex flex-row flex-wrap gap-20">
        {products.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductCard.Image />
            <ProductCard.Title />
            <ProductCard.Buttons
              className="text-red-500 text-xl font-bold"
              style={{ fontSize: 44 }}
            />
          </ProductCard>
        ))}
        <div className="shopping-cart flex gap-5">
          {Object.entries(shoppingCart).map(([key, product]) => (
            <ProductCard
              product={product}
              className="w-[100px]"
              key={key}
              onChange={onProductCountChange}
              value={product.count}
            >
              <ProductCard.Image />

              <ProductCard.Buttons
                className="text-red-500  font-bold"
                style={{ fontSize: 22 }}
              />
            </ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};
