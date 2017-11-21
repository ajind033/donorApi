var Protone = require ('..//models/prsevice.model.js');

exports.create = (req,res) =>{
    
        var entry = new Protone({
            Blood : req.body.Blood,
            name : req.body.name1,
            Contact : req.body.Contact,
            Gender : req.body.Gender,
            DOB : req.body.DOB
        });
        entry.save()
        .then(() => res.send(JSON.stringify(cust)))
        .catch((err) => res.send(err));
    };

    exports.getaCust = (req,res,blood) =>{

        Protone.find({ 'Blood': blood },'-__v -_id',  (err, cust)=> {
                       if(err)
                        res.send(err);
                        
                      res.send(JSON.stringify(cust));
        });
    }

