import { createContext } from "react";

const BasketContext = createContext({
  basketProducts: [],
  updateBasket: () => {},
});

export default BasketContext;
