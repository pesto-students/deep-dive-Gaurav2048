const splitInputLine = (
    line, // line to be split
    header = null , // header items (for creating json object)
    seperators = null, // seperator array to find valid seperators
    returnArray = false //  
) => {
    if(line.trim() === "" || typeof line !== "string"){
        return {data: null , error: true}
    }
    if(returnArray === false && header === null ) return {data:null, error: true}

    let splitRegex  
    if(seperators === null || seperators.length === 0){
        splitRegex = ","; 
    }else{
        // assuming space for no separator provided. 
        splitRegex = seperators.join("")
    }
    
    // removing commented part from line if any
    var commentPosition = line.indexOf("#"); 
    if(commentPosition !== -1){
        line = line.substring(0,commentPosition);
    }

    const splittedArray = line.split(new RegExp(splitRegex))
    if(returnArray === true){
        // return an array
        return {data:splittedArray, error: false}; 
    }else{
        const splittedArray = line.split(new RegExp(splitRegex))
        let seperatedObject  = {}
        for(const index in header){
            seperatedObject[header[index]] = splittedArray[index]
        }
        return { data: seperatedObject, error: false }; 
    }
}

const isComment = line =>{
    if(line[0]==="#"){
        return true
    }
    return false; 
}

module.exports = {
    splitInputLine, isComment
}  

// console.log(splitInputLine('aaa ,bbb,ccc#dddede', ["header1", "header2", "header3"], [',']));
