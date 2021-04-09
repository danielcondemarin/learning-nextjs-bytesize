import BasketContext from "../components/BasketContext";
import { useRouter } from "next/router";
import { useContext, useCallback } from "react";

const useTrolley = (productId) => {
  const router = useRouter();
  const { updateBasket } = useContext(BasketContext);

  const addToTrolley = useCallback(
    async (e) => {
      e.stopPropagation();

      const response = await fetch(`/api/basket/${productId}`, {
        method: "POST",
      });

      const result = await response.json();

      updateBasket(result.basketProducts);
    },
    [router]
  );

  return addToTrolley;
};

export default useTrolley;
