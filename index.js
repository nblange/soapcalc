const express = require('express');
var mysql      = require('mysql');
const app = express();
const morgan = require('morgan');
const bodyParser = require ('body-parser')
const ingredientController = require('./server/controllers/ingredientController')
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
  next();
});
var pool      =    mysql.createPool({
    connectionLimit : 100, //important
    host     : 'localhost',
    user     : 'nick',
    password : 'Nala1992!',
    database : 'soapcalc',
});
var apiRoutes = express.Router();
app.use('/api', apiRoutes);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));


apiRoutes.post('/create_ingredient', ingredientController.createIngredient);
apiRoutes.get('/ingredients',function(req,res){

    pool.getConnection(function(err,connection){
        if (err) {
          res.json({"code" : 100, "status" : "Error in connection database"});
          return;
        }

        console.log('connected as id ' + connection.threadId);

        connection.query("select * from ingredients",function(err, ingredients){
            connection.release();
            if(!err) {
              var ingredient = [];
                  for(var i = 0; i <ingredients.length; i++){
                    ingredient.push(ingredients[i])
                    (console.log"ingredients loaded")
                  }
                res.send(ingredient);
            }
        });

        connection.on('error', function(err) {
              res.json({"code" : 100, "status" : "Error in connection database"});
              return;
        });
  })
})

app.listen(3002, function(){
  console.log('listening on port 3002')
})
