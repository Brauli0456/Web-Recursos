const http = request('http');
const express = require ('express');
const app = express();


app.get('/',(req,res)=> {


    res.send('iniciamos Servidor');
})

const puerto =3000

app.listen(puerto,()=>{

console.log('Escuchando');

});


