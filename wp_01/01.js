

const http = require('http');
const port =3000;
const hostname ='0.0.0.0';

const server = http.createServer(
    (req,res)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        result = {
            'status':200,
            'msg':'hello world'
         };
        res.end(JSON.stringify(result));

    });


server.listen(port,hostname,()=>{
    console.log('nodejs running...')
})