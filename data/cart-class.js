class Cart{
  cartItems=undefined;
  localKey=undefined;

  constructor(localStorageKey){
    this.localKey=localStorageKey;
    
    
    this.loadfromstorage();
    
    
   
    
    
   
    
    
    console.log(this);
    
  }


  loadfromstorage(){
    this.cartItems=JSON.parse(localStorage.getItem(this.localKey))||[{
      productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity:1,
      deliveryoptionID:'1'
    },
    {
      productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity:2,
      deliveryoptionID:'2'
    }];
  };

  savetostorage(){
    localStorage.setItem(this.localKey,JSON.stringify(this.cartItems));
  };


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
     
  };

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

};

updatedeliveryoption(productId,deliveryoptionID){
  let matchingId;
  this.cartItems.forEach(cartitem => {
    if (productId===cartitem.productId){
      matchingId=cartitem;
    }
  })
  matchingId.deliveryoptionID=deliveryoptionID;
  this.savetostorage();
};

}
//pascalCase 



const cart= new Cart('cart-oop');
const businessCart= new Cart('cart-bus');
const hariCart= new Cart('cart-hari');


