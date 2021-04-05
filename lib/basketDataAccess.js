const inMemoryStore = {
  basketProducts: [],
};

export const getBasketProducts = () => {
  return inMemoryStore.basketProducts;
};

export const addToBasket = (product) => {
  inMemoryStore.basketProducts.push(product);
};

export const removeFromBasket = (productId) => {
  inMemoryStore.basketProducts = inMemoryStore.basketProducts.filter(
    (p) => p.id !== productId
  );
};
