/**
 * Calculate the total price of a list of products
 * @param {Array} products - list of products with price property
 * @returns {Number} total price
 */

export const totalPrice = (products) => {
  let total = 0;
  products.forEach(product => total += product.price);
  return total;
}