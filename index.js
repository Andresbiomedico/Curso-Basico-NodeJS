const fs=require("fs");
const ops=require("./src/fileops");


 function read(){
    const lecture= new Promise((resolve,reject)=>{
        console.log("entre a la promesa ")
            fs.readFile("./resources/number.txt","utf8",async function (error,texto){
                if (error){
                    reject(error)
                     return;
                } 
                const numbers=texto.split("\n")
                console.log("metodo read"+numbers)
                resolve(ops.incrementValues(numbers))
            })  
        })
    return lecture          
    } 

function write(x){
    console.log(x)
    fs.writeFile("./resources/numbernew.txt",x.join("\n"),
    (error,result)=>{
        if(error) 
        console.log(error)
        return
    })
}

async function ejecutar(){
try {
    console.log("escribiendo") 
    const listanumeros= await read()
    console.log("medoto ejecutar"+listanumeros)
     write(listanumeros) 
}
    catch (error) {
        console.log(`error catch parce ${error}`)
    }  
}
    

ejecutar()



