const connection = require("../database_connection/config")
const tokendata = require("../middleware/createToken")






module.exports.get_item =(req,res)=>{
    var sql = "SELECT * FROM Item";
    var query = connection.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result)
        res.send(result)
    })

}

