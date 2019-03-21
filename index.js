const http=require("http")
const fs=require("fs")

const server = http.createServer((req,res)=>{
    fs.readFile("./resources/my_page.html",(err,dat)=>{
        if(err){
            console.log(err)
            return;
        }
        res.end(dat)
    })
})
console.log("iniciando servidor")
server.listen(3000)
