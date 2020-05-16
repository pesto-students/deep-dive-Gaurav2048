var Impress = require('./Impress/Impress')


const auth = (req, res, next) =>{
    setTimeout(()=>{
        console.log('auth middleware passed!');
    next()
    }, 200) 
}

const secondaryAuth = (req, res, next) =>{
   setTimeout(()=>{
    console.log('sec auth middleware passed!', typeof next);
    next()    
   }, 300)
}



const TAuth = (req, res, next) =>{
   setTimeout(()=>{
    console.log('T auth middleware passed!', typeof next);
    next()    
   }, 400)
}


const BAuth = (req, res, next) =>{
   setTimeout(()=>{
    console.log('B auth middleware passed!', typeof next);
    next()    
   }, 450)
}

Impress.get('/one/:id', auth, secondaryAuth, TAuth, BAuth,  function (req, res) {
    res.send(200, JSON.stringify(req.body))
    console.log('one');

})

Impress.get('/login', auth, secondaryAuth, TAuth, BAuth,  function (req, res) {
    //res.send(200, "method executed")
    res.send(200,"node-exercises/simple-server-node/pages/login.html")
    console.log('one');

})

Impress.listen()

