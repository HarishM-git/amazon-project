export let cart=JSON.parse(localStorage.getItem('cart'))||[];




function savetostorage(cart){
  localStorage.setItem('cart',JSON.stringify(cart));
}




export function addtoCart(productId){
  let matchingId;
  cart.forEach(cartitem => {
    if (productId===cartitem.productId){
      matchingId=cartitem;
  }
 
  }); 
  if(matchingId){
    matchingId.quantity+=1;
  }
  else{
    cart.push({
      productId:productId,
      quantity:1,
      deliveryoptionID:'1'

    })
  }
  savetostorage(cart);
   
};


export function removeCartItem(productId){
    let newCart=[];
    cart.forEach(cartitem=>{
      if(cartitem.productId!=productId){
        newCart.push(cartitem);
      }
    })
  cart=newCart;
  //console.log(cart);
  savetostorage(cart);

}


export function updatedeliveryoption(productId,deliveryoptionID){
  let matchingId;
  cart.forEach(cartitem => {
    if (productId===cartitem.productId){
      matchingId=cartitem;
    }
  })
  matchingId.deliveryoptionID=deliveryoptionID;
  savetostorage(cart);
}