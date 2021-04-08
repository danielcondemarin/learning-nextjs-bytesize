import { useState, useCallback } from "react";
import { getBasketProducts } from "../lib/basketDataAccess";

const BasketPage = ({ basketProducts }) => {
  const [products, setBasketProducts] = useState(basketProducts);

  const removeItem = useCallback(async (productId) => {
    const response = await fetch(`/api/basket/${productId}`, {
      method: "DELETE",
    });

    const data = await response.json();

    setBasketProducts(data.basketProducts);
  }, []);

  const updateItemQty = useCallback(async (productId, qty) => {
    await fetch(`/api/basket/${productId}/${qty}`, {
      method: "POST",
    });
  });

  const basketProductElements = Object.entries(products).map(
    ([_, { id, qty, price, description, img }]) => (
      <tr key={description}>
        <td className="thumbnail">
          <a href="#">
            <img src={img} />
          </a>
        </td>
        <td>
          <p>{description}</p>
          <button onClick={() => removeItem(id)}>
            <small>(Remove item)</small>
          </button>
        </td>
        <td className="qty-column">
          <div className="w-12 h-10">
            <input
              type="number"
              defaultValue={qty}
              onChange={(e) => updateItemQty(id, e.target.value)}
            />
          </div>
        </td>
        <td className="text-right">
          <span className="font-medium">{price}</span>
        </td>
      </tr>
    )
  );

  return (
    <div className="basket">
      <div className="basket-inner">
        <div className="flex-1">
          <table>
            <thead>
              <tr>
                <th></th>
                <th className="text-left">Product</th>
                <th className="text-right">
                  <span>Quantity</span>
                </th>
                <th className="text-right">Total price</th>
              </tr>
            </thead>
            <tbody>{basketProductElements}</tbody>
          </table>
          <hr className="pb-6 mt-6" />
          <button className="checkout">
            <svg
              className="w-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
              />
            </svg>
            <span>Proceed to checkout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const basketProducts = getBasketProducts();

  return {
    props: { basketProducts },
  };
}

export default BasketPage;
