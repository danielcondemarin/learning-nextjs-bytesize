import ProductData from "../../../data/products.json";
import { addToBasket, getBasketProducts } from "../../../lib/dataAccess";

const getProductById = (productId) => {
  const product = ProductData.find((p) => p.id === productId);
  return product;
};

export default function handler(req, res) {
  switch (req.method) {
    case "POST":
      const productId = req.query.productId;
      const product = getProductById(productId);

      if (!product) {
        res
          .status(400)
          .json({ error: `Could not find product with id ${productId}` });
        return;
      }

      addToBasket(product);

      res.status(200).json({ basketProducts: getBasketProducts() });
      break;
    default:
      res.status(405).end();
      break;
  }
}
