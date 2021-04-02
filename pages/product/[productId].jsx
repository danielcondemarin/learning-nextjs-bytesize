import ProductDetails from "../../components/ProductDetails";
import ProductData from "../../data/products.json";

const ProductDetailsPage = ({ productDetails }) => {
  const { price, img, description } = productDetails;
  return <ProductDetails price={price} img={img} description={description} />;
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
