import { tofixedpricecents } from "../scripts/utils/money.js";


describe('testing group for money.js:',()=>{
  it('converts pricecents to dollars:',()=>{
    expect(tofixedpricecents(2005)).toEqual('20.05');
  });
  it('checks for zero:',()=>{
    expect(tofixedpricecents(0)).toEqual('0.00');
  });
  
});
