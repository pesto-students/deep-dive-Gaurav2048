
function objectInvert(args) {
  const invertedObject = {}

  for(const [key, val] of Object.entries(args)){
    invertedObject[val] = key; 
  }

  return invertedObject;
}

export {
  objectInvert,
};
