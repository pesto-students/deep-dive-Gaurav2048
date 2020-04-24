
function objectInvert(obj) {
  const invertedObject = {}

  for(const [key, val] of Object.entries(obj)){
    if(val !== null || val !== undefined ){
    if(typeof val === "object") {
      const invertedSubObj = objectInvert(val); 
      invertedObject[key] = invertedSubObj;
    }else if(typeof val === "function") {
      // todo 
    }else {
      invertedObject[val] = key;
    }
  }
  }

  return invertedObject;
} 

export {
  objectInvert,
};
