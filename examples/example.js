const scrape = require('./../index.js');
const product = scrape('32857582722');

product.then(res => {
  console.log('The JSON: ', res);
});