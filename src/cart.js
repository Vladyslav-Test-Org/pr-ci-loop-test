// Small cart helpers used by the page and covered by the tests.

export function itemTotal(item) {
  console.log("item", item.price);
  return item.price * item.quantity;
}

export function cartTotal(items) {
  return items.reduce((sum, item) => sum + itemTotal(item), 0);
}

export function formatPrice(cents) {
  return `$${(cents / 100).toFixed(2)}`;
}
