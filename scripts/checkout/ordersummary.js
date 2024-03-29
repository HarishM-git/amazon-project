import {cart,removeCartItem, updatedeliveryoption} from '../../data/cart.js';
import {products,getproduct} from '../../data/products.js';
import {tofixedpricecents} from '../utils/money.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { deliveryoptions,getdeliveryoption } from '../../data/deliveryoptions.js';
import { renderpaymentsummary } from './paymentsummary.js';








export function renderordersummary(){



        let cartSummaryHTML='';

        cart.forEach(cartitem => {
          const productId=cartitem.productId;
          const matchingProduct=getproduct(productId);
          //console.log(matchingProduct);
          const deliverydateid=cartitem.deliveryoptionID;

        let deliveryoption=getdeliveryoption(deliverydateid);
            let today=dayjs(); 

            const deliverydate= today.add(deliveryoption.deliverydays,'days');

        //console.log(deliverydate.format('dddd MMMM D'));
          cartSummaryHTML+=`
          <div class="cart-item-container js-cart-item-${matchingProduct.id}">
              <div class="delivery-date">
                Delivery date:  ${deliverydate.format('dddd MMMM D')}
              </div>

              <div class="cart-item-details-grid">
                <img class="product-image"
                  src="${matchingProduct.image}">

                <div class="cart-item-details">
                  <div class="product-name">
                  ${matchingProduct.name}
                  </div>
                  <div class="product-price">
                  ${tofixedpricecents(matchingProduct.priceCents)}
                  </div>
                  <div class="product-quantity">
                    <span>
                      Quantity: <span class="quantity-label">${cartitem.quantity}</span>
                    </span>
                    <span class="update-quantity-link link-primary">
                      Update
                    </span>
                    <span class="delete-quantity-link link-primary js-delete-link"data-product-id=${matchingProduct.id}>
                      Delete
                    </span>
                  </div>
                </div>

                <div class="delivery-options">
                  <div class="delivery-options-title">
                    Choose a delivery option:
                  </div>
                  ${deliveryoptionHTML(matchingProduct,cartitem)}
                </div>
              </div>
            </div>
          `;
        });
        //console.log(cartSummaryHTML)
        function deliveryoptionHTML(matchingProduct,cartitem){
          let html='';


          deliveryoptions.forEach((deliveryoption)=>{

            const today=dayjs(); 

            const deliverydate=today.add(deliveryoption.deliverydays,'days');
        //console.log(deliverydate.format('dddd MMMM D'));

            const pricestring=deliveryoption.pricecents===0
              ? 'FREE'
              : `${tofixedpricecents(deliveryoption.pricecents)} -`

            const ischecked=deliveryoption.id===cartitem.deliveryoptionID;

        



            html+=`
            <div class="delivery-option js-delivery"data-product-id=${matchingProduct.id} data-delivery-option=${deliveryoption.id}>
              <input type="radio" ${ischecked ? 'checked':''}
                class="delivery-option-input"
                name="${matchingProduct.id}">
              <div>
                <div class="delivery-option-date">
                ${deliverydate.format('dddd MMMM D')}
                </div>
                <div class="delivery-option-price">
                  ${pricestring} Shipping
                </div>
              </div>
          </div>
          
            `
          })

          return html;
        }

        document.querySelector('.order-summary').innerHTML=cartSummaryHTML;

        document.querySelectorAll('.js-delete-link').forEach(link => {
        
          link.addEventListener('click',()=>{
            const productId=link.dataset.productId;
            removeCartItem(productId);
            
            const container=document.querySelector(`.js-cart-item-${productId}`);
            //console.log(container);
            container.remove();
         
            
           
            
          })
        });

        document.querySelectorAll('.js-delivery').forEach(element => {
            element.addEventListener('click',()=>{
              const {productId,deliveryOption}=element.dataset;
              updatedeliveryoption(productId,deliveryOption);
       
              renderordersummary();
              
            })  
        });

       

  }


  



