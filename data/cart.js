export let cart=JSON.parse(localStorage.getItem('cart'));

if (!cart){
  cart=[{
    productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity:1,
  },
  {
    productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity:2,
  }];
}


function savetostorage(){
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
      quantity:1

    })
  }
  savetostorage();
   
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
  savetostorage();

}