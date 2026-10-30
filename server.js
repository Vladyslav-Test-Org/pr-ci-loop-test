import { createServer } from "node:http";
import { readFileSync } from "node:fs";
import { cartTotal, formatPrice } from "./src/cart.js";

const PORT = Number(process.env.PORT || 3000);
const items = [
  { name: "Coffee beans", price: 1450, quantity: 1 },
  { name: "Mug", price: 900, quantity: 2 },
];

createServer((req, res) => {
  if (req.url === "/style.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.end(readFileSync("public/style.css"));
    return;
  }
  const rows = items
    .map((i) => `<li>${i.name} × ${i.quantity} <span>${formatPrice(i.price * i.quantity)}</span></li>`)
    .join("");
  res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  res.end(`<!doctype html><html><head><meta charset="utf-8"><title>Cart</title>
<link rel="stylesheet" href="/style.css"></head><body>
<h1>Your cart</h1><ul>${rows}</ul><p class="total">Total: ${formatPrice(cartTotal(items))}</p>
</body></html>`);
}).listen(PORT, () => console.log(`Cart running on http://localhost:${PORT}`));
