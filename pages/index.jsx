import ProductCard from "../components/ProductCard";

const HomePage = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="-mx-4 flex flex-wrap">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default HomePage;
