import ProductCard from "../components/ProductCard";
import { getAllProducts } from "../lib/productStore";
import { getBasketProducts } from "../lib/basketStore";

const HomePage = ({products}) => {
  const productCards = products.map((product) => (
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

export async function getStaticProps() {
  const allProducts = await getAllProducts();

  const props = { products: allProducts };

  return {
    props,
  };
}

export default HomePage;
