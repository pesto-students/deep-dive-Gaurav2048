const Parse = require('./Parse');
const fs = require('fs');
//https://www.w3.org/TR/PNG/iso_8859-1.txt
async function test() {
  const result = await Parse.csvParse('input.txt', { separators: ['!', ',', '$', '.'], ignoreHeader: true });
  console.log(result);
}
// fs.createReadStream('input.txt').pipe(Parse.csvParse()).pipe(process.stdout);
test();
// module.exports = RandomConverter
