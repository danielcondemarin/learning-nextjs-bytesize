const inMemoryStore = {
  basketProducts: [],
};

export const getBasketProducts = () => {
  return inMemoryStore.basketProducts;
};

export const addToBasket = (product) => {
  inMemoryStore.basketProducts.push(product);
};
