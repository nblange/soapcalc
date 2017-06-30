
var mysql      = require('mysql');
var pool      =    mysql.createPool({
    connectionLimit : 100, //important
    host     : 'localhost',
    user     : 'nick',
    password : 'Nala1992!',
    database : 'soapcalc',
});

class Ingredient{
  constructor(id, name, sap, hardness, cleansing, condition1, bubbly, creamy, iodine, ins, lauric, myristic, palmitic, stearic,
              rincinoleic, oleic, linoleic, linolenic){
                this.id = id;
                this.name = name;
                this.sap = sap;
                this.hardness = hardness;
                this.cleansing = cleansing;
                this.condition1 = condition1;
                this.bubbly = bubbly;
                this.creamy = creamy;
                this.iodine = iodine;
                this.ins = ins;
                this.lauric = lauric;
                this.myristic = myristic;
                this.palmitic = palmitic;
                this.stearic = strearic;
                this.rincinoleic = rincinoleic;
                this.oleic = oleic;
                this.linoleic = linoleic;
                this.linolenic = linolenic;
  }
  save(callback){
      const queryString = `INSERT INTO ingredients(id, name, sap, hardness, cleansing, condition1, bubbly, creamy, iodine, ins,
                           lauric, myristic, palmitic, stearic, rincinoleic, oleic, linoleic, linolenic) VALUES ('${this.id}',
                           '${this.name}', '${this.sap}', ${this.hardness}, '${this.cleansing}', ${this.condition1},
                           '${this.bubbly}', '${this.creamy}', '${this.iodine}', ${this.ins}, '${this.lauric}',
                            ${this.myristic}, '${this.palmitic}','${this.stearic}', '${this.rincinoleic}', ${this.oleic},
                            '${this.linoleic}', ${this.linolenic})`
                            pool.getConnection(function(err,connection){
                                if (err) {
                                  res.json({"code" : 100, "status" : "Error in connection database"});
                                  return;
                                }

                                console.log('connected as id ' + connection.threadId);

                                connection.query(querySting ,function(err,rows){
                                    connection.release();
                                    if(!err) {
                                        res.json(rows);
                                    }
                                });

                                connection.on('error', function(err) {
                                      res.json({"code" : 100, "status" : "Error in connection database"});
                                      return;
                                });
                          });
                        }
}

Ingredient.fetchAllIngredients = function(req,res){
  pool.getConnection(function(err,connection){
      if (err) {
        res.json({"code" : 100, "status" : "Error in connection database"});
        return;
      }

      console.log('connected as id ' + connection.threadId);

      connection.query('select * from ingredients' ,function(err,rows){
          connection.release();
          if(!err) {
              res.json(rows);
          }
      });

      connection.on('error', function(err) {
            res.json({"code" : 100, "status" : "Error in connection database"});
            return;
      });
});
};


module.exports = Ingredient;
