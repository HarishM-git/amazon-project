export const cart=[];
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
   
};