import ProductDetails from "../../components/ProductDetails";

const ProductDetailsPage = ({ productDetails }) => {
  const { price, img, description } = productDetails;
  return <ProductDetails price={price} img={img} description={description} />;
};

export async function getServerSideProps(context) {
  const products = require("../../data/products.json");
  const productDetails = products.find((p) => p.id === context.query.productId);

  return {
    props: { productDetails },
  };
}

export default ProductDetailsPage;
