const mongoose =require('mongoose');

const ConnectDB =  ()=>{
     mongoose.connect('mongodb+srv://Admin:Admin@cluster0.rjzjxp8.mongodb.net/eventdpot?retryWrites=true&w=majority', {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then((con)=>{
        console.log(`mongodb connected to ${con.connection.host}`)
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports=ConnectDB;
