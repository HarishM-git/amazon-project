import { cart } from "../../data/cart.js";
import { getproduct } from "../../data/products.js";
let productprice=0;

export function renderpaymentsummary(){
  cart.forEach(cartitem => {
    const product= getproduct(cartitem.productId);
    productprice+=product.priceCents*cartitem.quantity
  });
  console.log(productprice);
}