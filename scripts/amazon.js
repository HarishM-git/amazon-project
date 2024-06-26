import {cart,addtoCart} from '../data/cart.js';
//import {addtoCart} from '../data/cart.js'; can be imported as individual
import {products} from '../data/products.js';
import {tofixedpricecents} from './utils/money.js';






let html='';

products.forEach(element => {

  html+=`<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${element.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${element.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${element.rating.stars*10}.png">
            <div class="product-rating-count link-primary">
              ${element.rating.count}
            </div>
          </div>

          <div class="product-price">
            ${tofixedpricecents(element.priceCents)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart"data-product-id="${element.id}"
          >
            Add to Cart
          </button>
        </div>`

  
});


document.querySelector('.products-grid').innerHTML=html;


document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
  
  button.addEventListener('click', () => {
    
    
    const productId=button.dataset.productId;
    addtoCart(productId);
    //console.log(productId);
   
    //console.log(cart)   
    //learnt more about objects and arrays and also about loops
    document.querySelector('.cart-quantity').innerHTML=updatecartqt();  

   
  })

})
export function updatecartqt(){
  let whole_quantity=0;
  cart.forEach(cartitem => {
    whole_quantity+=cartitem.quantity;
  });
  console.log(whole_quantity)


return whole_quantity;

}
updatecartqt();



document.querySelector('.cart-quantity').innerHTML=updatecartqt();  


