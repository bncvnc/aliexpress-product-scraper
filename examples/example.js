const scrape = require('./../index.js');

const data  = [
  '1005001612112453'
]


function delay() {
    return new Promise(resolve => setTimeout(resolve, 300));
}

async function delayedLog(item) {
    // notice that we can await a function
    // that returns a promise
    await delay();
    const product = await scrape(item,2,{headless:false});
    console.log({product});
}
async function processArray(array) {
    for (const item of array) {
        await delayedLog(item);
    }
    console.log('Done!');
}

processArray(data).then(r => {
    console.log({r});
});
//  Promise.all(data.map(async (data, i) => {
//   const product = await scrape(data,2);
//      console.log({product});
//   return product;
//
// }))
