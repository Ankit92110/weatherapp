 const express=require('express');
const app = express();
const  path = require('path');
const hbs = require('hbs');
 const port=process.env.PORT || 8000;

 

const staticpath = path.join(__dirname,"../public");
const templatepath=path.join(__dirname,"../template/views");
const partialpath=path.join(__dirname,"../template/partials") 

app.set('view engine', 'hbs');
app.set('views',templatepath);

app.use(express.static(staticpath));

// we registerPartials

hbs.registerPartials(partialpath);
app.get("/",(req, res) => {
    res.render("index");
}) 

app.get("/about",(req, res) => {
    res.render("about");
}) 
app.get("/weather",(req, res) => {
    res.render("weather");
}) 

app.get('*',(req,res)=>{
    res.render("404err");
    
    });
app.listen(port,()=>{
    console.log("i am listening on port no 8000");
})