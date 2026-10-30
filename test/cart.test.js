import { test } from "node:test";
import assert from "node:assert/strict";
import { itemTotal, cartTotal, formatPrice } from "../src/cart.js";

test("itemTotal multiplies price by quantity", () => {
  assert.equal(itemTotal({ price: 250, quantity: 3 }), 750);
});

test("cartTotal sums every item", () => {
  const items = [
    { price: 100, quantity: 2 },
    { price: 350, quantity: 1 },
  ];
  assert.equal(cartTotal(items), 550);
});

test("cartTotal of an empty cart is zero", () => {
  assert.equal(cartTotal([]), 0);
});

test("formatPrice shows dollars with two decimals", () => {
  assert.equal(formatPrice(1999), "$19.99");
  assert.equal(formatPrice(5), "$0.05");
});
