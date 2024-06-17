import fp from 'lodash'
const priceFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  
 export const prettyPrintCupcake = (cupcake) => {
    return `${cupcake.flavor} cupcakes cost ${priceFormatter.format(cupcake.price)} each`;
  };
  
 export const simplePrintCupcake = (cupcake) => {
    return `${cupcake.flavor}: ${priceFormatter.format(cupcake.price)}`;
  };

  // export default function printCupcakeUppercase (cupcake) {
  //   let upperStr = fp._.toUpper(cupcake.flavor)
  //   return upperStr
  // }

   const printCupcakeUppercase =  (cupcake) => {
    let upperStr = fp._.toUpper(cupcake.flavor)
    return upperStr
  }
// export { prettyPrintCupcake,simplePrintCupcake}
console.log(printCupcakeUppercase({flavor:'blueberry',price: 4.00}))

export default printCupcakeUppercase //exporting default arrow functions