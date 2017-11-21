var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var protSchema = new Schema ({

    Blood : {
          
        type : String,
        required : true
    },
    Contact : {
        type : String,
        required : true
   
    },
    Gender :{
        type : String,
        required :  true
      },
    name :{
        type : String,
        required :  true
    },

   DOB:{
    type : String,
    required :  true
}
   
}
);


// Export Model

module.exports = mongoose.model("donor",protSchema);