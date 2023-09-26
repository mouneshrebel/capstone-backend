const mongoose =require ('mongoose');

const Booksschema =mongoose.Schema ({
 title : {
    type: String ,
    required : true
 } ,
 description:{
    type:String
 }

});

 module.exports = mongoose.model('books',Booksschema);