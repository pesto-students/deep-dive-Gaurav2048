const { Parse, Unparse } = require('./utils');

 
console.log(__dirname);

// Parse.csvParse(__dirname+'/test.csv', {}).then(data=>{
//     console.log(data);
// }).catch(e=>{
//     console.log(e);
// })

// Parse.csvParse('https://algorithm-visualizer-am.netlify.app/test.csv', {
//     isRemoteUrl: true
// }).then(data=>{
//     console.log(data);
// }).catch(e=>{
//     console.log(e);
// })

Parse.csvParseStream(__dirname+'/test.csv',{}, function(item){
    console.log(item);
})




