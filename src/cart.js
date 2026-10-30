// Small cart helpers used by the page and covered by the tests.

export function itemTotal(item) {
  return item.price * item.quantity;
}

export function cartTotal(items) {
  const total = items.reduce((sum, item) => sum + itemTotal(item), 0);
  console.log("cart total", total);
  return total;
}

export function formatPrice(cents) {
  console.log("formatting", cents);
  return `$${(cents / 100).toFixed(2)}`;
}
