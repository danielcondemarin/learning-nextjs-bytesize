import ProductCard from "../components/ProductCard";
import ProductData from "../data/products.json";
import { getBasketProducts } from "../lib/basketDataAccess";

const HomePage = () => {
  const productCards = ProductData.map((product) => (
    <ProductCard
      key={product.id}
      productId={product.id}
      description={product.description}
      imgUrl={product.img}
      price={product.price}
    />
  ));

  return (
    <div className="product-list">
      <div className="product-list-inner">{productCards}</div>
    </div>
  );
};

export async function getServerSideProps() {
  const basketProducts = await getBasketProducts();

  return {
    props: { basketProducts },
  };
}

export default HomePage;
