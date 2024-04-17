export const calculateTotal = (cart) => {
  let sum = 0;
  cart.forEach(cp => sum += cp.product.price * cp.quantity);
  return sum.toFixed(2);
};