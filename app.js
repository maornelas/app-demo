var express = require("express");
var app = express();

app.listen(80,()=>{
    console.log(" Servidor listo en el puerto 80");
});

app.get("/url",(req,res,next)=>{
    res.json(["Marco","Javi","Arnold","Aaron","Ultimo Ejemplo ya para dormir perro"]);
})