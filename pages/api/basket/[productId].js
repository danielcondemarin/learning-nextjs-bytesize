import ProductData from "../../../data/products.json";
import {
  addToBasket,
  removeFromBasket,
  getBasketProducts,
} from "../../../lib/basketDataAccess";

const getProductById = (productId) => {
  const product = ProductData.find((p) => p.id === productId);
  return product;
};

export default function handler(req, res) {
  const productId = req.query.productId;
  const product = getProductById(productId);

  if (!product) {
    res
      .status(400)
      .json({ error: `Could not find product with id ${productId}` });
    return;
  }

  switch (req.method) {
    case "POST":
      addToBasket(product);
      res.status(200).json({ basketProducts: getBasketProducts() });
      break;
    case "DELETE": {
      removeFromBasket(productId);
      res.status(200).json({ basketProducts: getBasketProducts() });
      break;
    }
    default:
      res.status(405).end();
      break;
  }
}
