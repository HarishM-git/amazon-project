import { cart } from "../../data/cart.js";
import { getproduct } from "../../data/products.js";
import {getdeliveryoption} from '../../data/deliveryoptions.js'
import { tofixedpricecents } from "../utils/money.js";

let productprice=0;
let shippingproductprice=0;

export function renderpaymentsummary(){
  
  console.log(cart);
  cart.forEach(cartitem => {
    let product= getproduct(cartitem.productId);
    productprice+=product.priceCents*cartitem.quantity;
    let deliveryoption=getdeliveryoption(cartitem.deliveryoptionID);
    shippingproductprice+=deliveryoption.pricecents;
  });
  let totalbeforetax=productprice+shippingproductprice;
  let tax=totalbeforetax*0.1;
  let totalaftertax=totalbeforetax+tax;
  let paymentsummaryHTML=`
          
                  <div class="payment-summary-title">
                    Order Summary
                  </div>

                  <div class="payment-summary-row">
                    <div>Items (${quantityAgain()}):</div>
                    <div class="payment-summary-money">${tofixedpricecents(productprice)}</div>
                  </div>

                  <div class="payment-summary-row">
                    <div>Shipping &amp; handling:</div>
                    <div class="payment-summary-money">
                    $${tofixedpricecents(shippingproductprice)}
                    </div>
                  </div>

                  <div class="payment-summary-row subtotal-row">
                    <div>Total before tax:</div>
                    <div class="payment-summary-money">
                    $${tofixedpricecents(totalbeforetax)}
                    </div>
                  </div>

                  <div class="payment-summary-row">
                    <div>Estimated tax (10%):</div>
                    <div class="payment-summary-money">
                    $${tofixedpricecents(tax)}
                    </div>
                  </div>

                  <div class="payment-summary-row total-row">
                    <div>Order total:</div>
                    <div class="payment-summary-money">$${tofixedpricecents(totalaftertax)}</div>
                  </div>

                  <button class="place-order-button button-primary">
                    Place your order
                  </button>  
  `

  document.querySelector('.js-payment-summary').innerHTML=paymentsummaryHTML; 
  return 'hekasdh';


}
export function quantityAgain(){
  let whole_quantity=0;
  cart.forEach(cartitem => {
    whole_quantity+=cartitem.quantity;
  });
  console.log(whole_quantity)
  document.querySelector('.js-checkout-products').innerHTML=whole_quantity;



return whole_quantity;

}