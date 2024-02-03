import { addtoCart ,cart} from "../../data/cart.js";

describe('test suite add to cart:',()=>{
  it('testing add to cart function weather it adds or not:',()=>{
    addtoCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6')
    expect(cart.length).toEqual(1);
  })
  
})