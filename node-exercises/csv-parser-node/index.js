const { Parse, Unparse } = require('./utils');
//https://algorithm-visualizer-am.netlify.app/test.csv
async function test() {
  const func = function(a) {
    console.log(a);
  }
  // const result = await Parse.csvUnparse('input.json');
  const result = await Unparse.csvUnparse('./utils/input.json');
  console.log(result);
}
test();
