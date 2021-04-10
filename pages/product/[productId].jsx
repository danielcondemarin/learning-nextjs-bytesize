import ProductDetails from "../../components/ProductDetails";
import { getProductByID, getAllProducts } from "../../lib/productStore";

const ProductDetailsPage = ({ productDetails }) => {
  return <ProductDetails {...productDetails} />;
};

export async function getStaticPaths() {
  const allProducts = await getAllProducts();

  const paths = allProducts.map(product => {
    return { params: { productId: product.id }};
  });

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps(context) {
  const productDetails = await getProductByID(context.params.productId);

  return {
    props: { productDetails },
  };
}

export default ProductDetailsPage;
