import ProductCard from "../components";

import "../styles/custom-styles.css";
import { products } from "../data/products";

export const ShoppingPageInitializer = () => {
  return (
    <div>
      <h1>ShoppingStore</h1>
      <hr />
      <div className="flex flex-row flex-wrap gap-20">
        {products.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            initialValues={{
              count: 4,
              maxCount: 10,
            }}
          >
            {({
              count,
              increaseBy,
              isMaxCountReached,
              product,
              reset,
              maxCount,
            }) => (
              <>
                <ProductCard.Image />
                <ProductCard.Title />
                <ProductCard.Buttons
                  className="text-red-500 text-xl font-bold"
                  style={{ fontSize: 44 }}
                />
                <button className="bg-gray-500 m-3 rounded" onClick={reset}>
                  Reset
                </button>
                <span>maxCount:{maxCount}</span>
                <code className="flex-wrap flex">
                  {JSON.stringify(product)}
                </code>
                <span>isMaxCountReached: {`${isMaxCountReached()}`}</span>
                <button
                  className="bg-red-500 m-3 rounded"
                  onClick={() => increaseBy(-2)}
                >
                  -2
                </button>
                <span>{count}</span>
                <button
                  className="bg-red-500 m-3 rounded"
                  onClick={() => increaseBy(2)}
                >
                  +2
                </button>
                {console.log(isMaxCountReached())}
              </>
            )}
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
