import ProductCard from "../components/ProductCard";
import ProductData from "../data/products.json";

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

export default HomePage;
