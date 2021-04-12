import ProductDetails from "../../components/ProductDetails";
import { getBasketProducts } from "../../lib/basketStore";
import { getProductByID } from "../../lib/productStore";

const ProductDetailsPage = ({ productDetails }) => {
  return <ProductDetails {...productDetails} />;
};

export async function getServerSideProps(context) {
  let [basketProducts, productDetails] = await Promise.all([
    getBasketProducts(),
    getProductByID(context.query.productId),
  ]);

  let notFound = false;

  if (!productDetails){
    notFound = true;
  }

  return {
    notFound,
    props: { productDetails, basketProducts },
  };
}

export default ProductDetailsPage;
