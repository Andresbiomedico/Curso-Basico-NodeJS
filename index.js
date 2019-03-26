const server=require ("http").Server()
const io=require("socket.io")(server)
const port=require("./config").SERVER_PORT
const banner=`
***************************
Basic node.js COurse
    course project
    Tic Tac toe Server 
****************************
Stutus.Online
Listening on port: ${port}
`
io.on("connection",(socket)=>{
    socket.on("register",(user)=>{
        console.info(`user registred: ${user.name}`)
    })
})
server.listen(port,()=>{
    console.info(banner)
})