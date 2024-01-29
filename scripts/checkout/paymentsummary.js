import { cart } from "../../data/cart.js";
import { getproduct } from "../../data/products.js";
import {getdeliveryoption} from '../../data/deliveryoptions.js'
let productprice=0;
let shippingproductprice=0;

export function renderpaymentsummary(){
  cart.forEach(cartitem => {
    const product= getproduct(cartitem.productId);
    productprice+=product.priceCents*cartitem.quantity;
    const deliveryoption=getdeliveryoption(cartitem.deliveryoptionID);
    shippingproductprice+=deliveryoption.pricecents;
  });
  console.log(productprice);
  console.log(shippingproductprice);




}