// set up connection param.
var connection = require("./connection.js");

// convert object key/value to SQL syntax
function objToSql(ob){
    var arr=[];

    //loop through the keys and push the key/value as a string/int arr
    for (var key in ob){
        var value = ob[key];
        //check to skip hidden properties
        if (Object.hasOwnProperty.call(ob,key)){
            if(typeof value === "string" && value.indexOf(" ")>=0){
                value = "'" + value + "'"
            }

            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}
// The number of question marks needed when create/update mySQL table
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
// Creating ORM

var orm = {

    //select all function
    selectAll: function(table, cb){
        var queryString = "SELECT * FROM "+ table +";";
        connection.query(queryString, function(err,result){
            if (err) throw err;
            cb(result);
        });
    },

    //adding a new row insertOne function
    insertOne: function(table, cols, val, cb){
        var queryString = "INSERT INTO "+ table + " (" + cols.toString()+") VALUES ("
        + printQuestionMarks(vales.length)+")";

        connection.query(queryString, vals, function(err,result){
            if (err) throw err;

            cb(result);
        })


    },

    //adding update function updateOne
    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;
    
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      }
}

module.exports=orm;