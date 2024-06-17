const priceFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  
  const prettyPrintCupcake = (cupcake) => {
    return `${cupcake.flavor} cupcakes cost ${priceFormatter.format(cupcake.price)} each!`;
  };
  
  const simplePrintCupcake = (cupcake) => {
    return `${cupcake.flavor}: ${priceFormatter.format(cupcake.price)}!`;
  };

  //object that you use to export files in CommonJs - this is the way!
  module.exports = {
    prettyPrintCupcake,
    simplePrintCupcake
  }