import { tofixedpricecents } from "../scripts/utils/money.js";


describe('testing group for money.js:',()=>{
  it('converts pricecents to dollars',()=>{
    expect(tofixedpricecents(2005)).toEqual('20.05');
  });
  
});
