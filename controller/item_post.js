const connection = require('../database_connection/config')
const tokendata = require("../middleware/createToken")

module.exports.item_order = (req,res)=>{
    var data ={
        id:req.body.id,
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity

    };
        var sql = "INSERT INTO Item SET ?";
        let query = connection.query(sql,data,(err,result)=>{
            if(err) throw err;
                console.log("data inserted")
                res.send("data inserted")


        });
      
    

    

    };




