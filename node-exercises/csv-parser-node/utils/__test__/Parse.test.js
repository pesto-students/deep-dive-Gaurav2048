const {Parse} = require('../Parse');

describe('Parse', () => {
  it('It should only accept a valid file.',  () => {
     try{
        Parse('abcde', {});
     } catch(error){
        expect(error).toBeInstanceOf(Error)
        expect(error).toHaveProperty('message', 'No file found.')
     }
  });

  it('should give a 2D array of csv file', async ()=>{
    await Parse(__dirname+'/input.txt', {}).toArray().then(res=>{
        expect(res.arrayOutput).to.have.length(3)
        expect(res.arrayOutput[0]).to.have.length(3)
    }).catch(er=>{

    })
  })

  it('should give a json object of csv file', async ()=>{
    await Parse(__dirname+'/input.txt', {}).toJson().then(res=>{
        expect(res.arrayOutput).to.have.length(2)
    }).catch(er=>{

    })
  })

});