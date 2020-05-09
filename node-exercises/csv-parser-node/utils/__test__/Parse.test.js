const Parse = require('../Parse');

describe('Parse', () => {
  it('It should only accept a valid file.', async () => {
     try {
        await Parse.csvParse('abcde', {});
     } catch(error){
        expect(error).toBeInstanceOf(Error)
        expect(error).toHaveProperty('message', 'No file found.')
     }
  });

  it('should give a 2D array of csv file', async ()=>{
    await Parse.csvParse(__dirname+'/input.txt', {}).then(res=>{       
        expect(res.response).toHaveLength(2)
    }) 
  })
 
  it('should give a json object of csv file', async ()=>{
    await Parse.csvParse(__dirname+'/input.txt', {}).then(res=>{
        expect(res.response[0].field_2).toBe('bbb')
        expect(res.response).toHaveLength(2)
    })
  })

  it('should should accept custom headers.', async ()=>{
     const customHeader = ["title_1", "title_2", "title_3"]; 
   await Parse.csvParse(__dirname+'/input.txt', {
      customHeader
   }).then(res=>{      
      const obj = res.response[0]
      const receivedHeaders = Object.keys(obj)
      let header_matching = true
      for(const index in receivedHeaders){
         if(receivedHeaders[index]!==customHeader[index]){
            header_matching = false
            break
         }
      }
      expect(header_matching).toBe(true)
   })
 })

 it('should abort on first error', async ()=>{
  const p = await Parse.csvParse(__dirname+'/err.txt', {
      abortOnError: true
   }).then(res=>{
     
   }).catch(er=>{

   })
 })

 it('should skip whenever error occurs.', async ()=>{
   await Parse.csvParse(__dirname+'/err.txt', {
       abortOnError: false
    }).then(res=>{
      expect(res.error.length).toBe(1)
      expect(res.response.length).toBe(2)
    })
  })

  it('should skip comments.', async ()=>{
   await Parse.csvParse(__dirname+'/commet.txt', {
       abortOnError: false
    }).then(res=>{       
      expect(res.error.length).toBe(2)
      expect(res.response.length).toBe(2)
    })
  })

  it('Should accept custom separators.', async ()=>{
   await Parse.csvParse(__dirname+'/sep.txt', {
       abortOnError: false, 
       separators : ['.','-','!']
    }).then(res=>{       
      expect(res.error.length).toBe(2)
      expect(res.response.length).toBe(2)
    })
  })

  it('should provide a stream extension.', async ()=>{
   let sum = 0
    await Parse.csvParseStream(__dirname+'/stream.txt', {} , function (item) {
      if(!item.completed){
         sum += parseInt(item.data.field_1.trim())
      }else {
          expect(sum).toBe(277) 
      }
    })
  })
  
  it('should fetch remote csv and parse to JSON.', async ()=>{
   const p = await Parse.csvParse('https://algorithm-visualizer-am.netlify.app/test.csv', {
      isRemoteUrl:true
    }).then(res=>{
      expect(res.response.length).toBe(154)
    })
  })

});
