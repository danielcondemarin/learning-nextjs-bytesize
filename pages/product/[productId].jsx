import ProductDetails from "../../components/ProductDetails";
import { getBasketProducts } from "../../lib/basketDataAccess";
import { getProductByID } from "../../lib/productStore";

const ProductDetailsPage = ({ productDetails }) => {
  return <ProductDetails {...productDetails} />;
};

export async function getServerSideProps(context) {
  const [basketProducts, productDetails] = await Promise.all([
    getBasketProducts(),
    getProductByID(context.query.productId),
  ]);

  return {
    props: { productDetails, basketProducts },
  };
}

export default ProductDetailsPage;
