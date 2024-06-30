function Cart(localKey){
  const cart={
    cartItems:undefined,
  
    loadfromstorage(){
      this.cartItems=JSON.parse(localStorage.getItem(localKey))||[{
        productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity:1,
        deliveryoptionID:'1'
      },
      {
        productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity:2,
        deliveryoptionID:'2'
      }];
    },
    savetostorage(){
      localStorage.setItem(localKey,JSON.stringify(this.cartItems));
    },
  
    addtoCart(productId){
      let matchingId;
      this.cartItems.forEach(cartitem => {
        if (productId===cartitem.productId){
          matchingId=cartitem;
      }
     
      }); 
      if(matchingId){
        matchingId.quantity+=1;
      }
      else{
        this.cartItems.push({
          productId:productId,
          quantity:1,
          deliveryoptionID:'1'
    
        })
      }
      
      this.savetostorage();
       
    },
  
    removeCartItem(productId){
      let newCart=[];
      this.cartItems.forEach(cartitem=>{
        if(cartitem.productId!=productId){
          newCart.push(cartitem);
        }
      })
    this.cartItems=newCart;
    console.log(this.cartItems);
    this.savetostorage();
  
  },
  
  
  
    updatedeliveryoption(productId,deliveryoptionID){
    let matchingId;
    this.cartItems.forEach(cartitem => {
      if (productId===cartitem.productId){
        matchingId=cartitem;
      }
    })
    matchingId.deliveryoptionID=deliveryoptionID;
    this.savetostorage();
  }
  
  
  }
  return cart;
}

const cart=Cart('cart-oop');
const businessCart=Cart('cart-bus');



cart.loadfromstorage();


businessCart.loadfromstorage();


businessCart.addtoCart('54e0eccd-8f36-462b-b68a-8182611d9add')


console.log(cart);
console.log(businessCart)
