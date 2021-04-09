import { updateProductQty } from "../../../../lib/basketDataAccess";

export default async function handler(req, res) {
  const productId = req.query.productId;
  const qty = req.query.qty;

  switch (req.method) {
    case "POST":
      await updateProductQty(productId, qty);
      res.status(200).end();
      break;
    default:
      res.status(405).end();
      break;
  }
}
