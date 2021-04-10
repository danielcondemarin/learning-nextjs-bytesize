import ProductData from "../data/products.json";

export const getAllProducts = async () => {
  return ProductData;
}

export const getProductByID = async (productID) => {
  const product = ProductData.find(
    (p) => p.id === productID
  );

  return product;
}