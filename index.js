const math= require("./math")
//estamos importando el index ya q cuando apuntamos a un directorio el busca el index o el json
const greet=require("./greetings")
const hello=require("./greetings/hello")

console.log(math.add(4,5))
console.log(math.divide(4,5))
console.log(math.multiply(4,5))
console.log(math.substract(4,5))

console.log(greet.greet("andres"))
console.log(hello.sayHello("Andres"))