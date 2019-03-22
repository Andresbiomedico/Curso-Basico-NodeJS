const express=require("express")
const app=express()

app.get("/",(req,res)=>{
res.send("estoy en la raiz")
})

app.get("/app",(req,res)=>{
    res.send("ESTOY EN LA APP")
})

app.get("*",(req,res)=>{
    res.send("estoy perdido")
})


app.listen(3000,()=>{
    console.log("lanzando servidor")
})
