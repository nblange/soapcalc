const _ = require('lodash');
const db = require('../db')


class Ingredient{
  constructor(id, name, sap, hardness, cleansing, condition1, bubbly, creamy, iodine, ins, lauric, myristic, palmitic, stearic,
              rincinoleic, oleic, linoleic, linolenic){
                this.id = id;
                this.name = name;
                this.soapcalc = sap;
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

  }

}
