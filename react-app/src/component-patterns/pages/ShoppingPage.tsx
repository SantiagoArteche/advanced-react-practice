import ProductCard, {
  Buttons,
  ProdImage,
  ProductCardHOC,
  Title,
} from "../components";

const product = {
  id: "1",
  title: "Coffe mug Card",
  img: "/coffee-mug.png",
};
import "../styles/custom-styles.css";
export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingStore</h1>
      <hr />
      <div className="flex flex-row flex-wrap gap-20">
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons
            className="text-red-500 text-xl font-bold"
            style={{ fontSize: 44 }}
          />
        </ProductCard>

        <ProductCardHOC product={product} className="bg-rades">
          <ProdImage />
          <Title className="text-white" />
          <Buttons className="text-xl text-white" />
        </ProductCardHOC>

        <ProductCardHOC product={product} className="bg-rades">
          <ProdImage />
          <Title className="text-white" />
          <Buttons className="text-xl text-white" style={{ fontSize: 33 }} />
        </ProductCardHOC>
      </div>
    </div>
  );
};
