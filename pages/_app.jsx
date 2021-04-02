import "../styles/base.css";
import "../styles/custom.css";

import Navbar from "../components/Navbar";
import BasketContext from "../components/BasketContext";
import { useCallback, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [basketProducts, setBasketProducts] = useState(
    pageProps.basketProducts
  );

  const updateBasket = useCallback(
    (basketProducts) => {
      setBasketProducts(basketProducts);
    },
    [setBasketProducts]
  );

  return (
    <main>
      <BasketContext.Provider value={{ basketProducts, updateBasket }}>
        <Navbar />
        <Component {...pageProps} />
      </BasketContext.Provider>
    </main>
  );
}

export default MyApp;
