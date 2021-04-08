import ProductDetails from "../../components/ProductDetails";
import ProductData from "../../data/products.json";

const ProductDetailsPage = ({ productDetails }) => {
  return <ProductDetails {...productDetails} />;
};

export async function getServerSideProps(context) {
  const productDetails = ProductData.find(
    (p) => p.id === context.query.productId
  );

  return {
    props: { productDetails },
  };
}

export default ProductDetailsPage;
