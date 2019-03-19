const call= require ("./src/call")

//console.log(call.sync("andres"))
//call.withCallback("Andres Aristizabal",call.sync)
call.withPromise("andres").then(name=>console.log(name))
