const express = require ('express') ;
const app = express ();
const cors = require ('cors');
const bodyparser = require ('body-parser');
const booksRote = require ('./routes/books');
const mongoose = require ('mongoose')

app.use (cors ());
app.use (bodyparser.json());
 
app.use ('/books', booksRote);
 

// app.use ( (req, res , next) =>{
//   console.log ("hello mounesh middleware!!!");
//      next (); route
//     })

mongoose.connect ('mongodb+srv://mounesh:rebelrkm@mounesh.ieq9wg7.mongodb.net/?retryWrites=true&w=majority')
 
const con = mongoose.connection;

try {
    con.on ("open",() =>{
        console.log ("MongoDB connected !!!!!") ;
    });
} catch (error){
    console.log ("error:" + error)
}

app.get('/', (req, res) =>{
 res.send ("hello mounesh!!!");


})


app.listen (4000);
