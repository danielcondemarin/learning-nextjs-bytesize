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

export default async function handler(req, res) {
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
      await addToBasket(product);
      res.status(200).json({ basketProducts: await getBasketProducts() });
      break;
    case "DELETE": {
      await removeFromBasket(productId);
      res.status(200).json({ basketProducts: await getBasketProducts() });
      break;
    }
    default:
      res.status(405).end();
      break;
  }
}
