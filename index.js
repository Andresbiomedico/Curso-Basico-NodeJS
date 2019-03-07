const fs=require("fs");
const ops=require("./src/fileops");


function read(){
fs.readFile("./resources/number.txt","utf8",
(err,texto)=>{
    if(err) throw err;
    const numbers=texto.split("\n");
    console.log(numbers)
    return ops.incrementValues(numbers);
    //console.log(listanumeros);
    
    
});
}

function write(x){
    fs.writeFile("./resources/numbernew.txt",
    x.join("\n"),
    (error,result)=>{
        if(error) throw error
    })
}

async function ejecutar(){
    console.log("escribiendo")
    const listanumeros=await read()
    write(listanumeros)

    
}
ejecutar()

