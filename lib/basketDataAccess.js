const inMemoryStore = {
  basketProducts: {},
};

export const getBasketProducts = () => {
  return inMemoryStore.basketProducts;
};

export const addToBasket = (product) => {
  const products = inMemoryStore.basketProducts;
  const productId = product.id;

  if (products[productId]) {
    products[productId].qty++;
  } else {
    products[productId] = { ...product, qty: 1 };
  }
};

export const removeFromBasket = (productId) => {
  delete inMemoryStore.basketProducts[productId];
};

export const updateProductQty = (productId, qty) => {
  const product = inMemoryStore.basketProducts[productId];
  product.qty = parseInt(qty);
};
