const call = require("./src/call");

async function callwithpromise(){
     const fullname = await call.withPromise("andres","aristizabal")
     console.log(fullname);
}
callwithpromise()