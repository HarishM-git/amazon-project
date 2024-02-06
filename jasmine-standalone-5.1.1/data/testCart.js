import { addtoCart ,loadfromstorage,cart} from "../../data/cart.js";

describe('test suite add to cart:',()=>{


  it('testing add to cart function weather it adds or not:',()=>{
    spyOn( localStorage,'getItem').and.callFake(()=>{
      return JSON.stringify([]);
    })
    loadfromstorage();
    console.log(localStorage.getItem('cart'));
    addtoCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6')
    expect(cart.length).toEqual(1);
  })
  
  
})