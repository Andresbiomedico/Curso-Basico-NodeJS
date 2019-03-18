const fs=require("fs");
const ops=require("./src/fileops");


  async function read(){
      const file=await fs.readFile("./resources/number.txt","utf8")
      /* async function (error,texto){
            
                const numbers=texto.split("\n");
                console.log("metodo read"+numbers);
                return await  ops.incrementValues(numbers);  
        }) */
} 


//function write(x){
    //console.log(x)
    //fs.writeFile("./resources/numbernew.txt",
    //x.join("\n"),
    //(error,result)=>{
        //if(error) throw error
    //})
//}

async function ejecutar(){
    console.log("escribiendo")
    const listanumeros= await read()
    console.log("medoto ejecutar"+listanumeros)
    //write(listanumeros)

    
}
try{
    ejecutar()

}
catch(e){
    console.log(e)
}

