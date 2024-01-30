export function tofixedpricecents(pricecent){
  return  (Math.round(pricecent)/100).toFixed(2);
}