const express = require('express');
const app = express();

const path = require('path');

const hbs = require('hbs');

const port = process.env.PORT || 8000;
const hostName = "127.0.0.1";

const tPath = path.join(__dirname, ('../templates/views'));

app.set('view engine', 'hbs');
app.set("views", tPath);

const pPath = path.join(__dirname, "../templates/partials");
hbs.registerPartials(pPath);

const sPath = path.join(__dirname, ('../public'));
app.use(express.static(sPath));


app.get("/", (req,res)=>{
    res.render('index');
});

app.get("/about", (req,res)=>{
    res.render('about');
});

app.get("/weather", (req,res)=>{
    res.render('weather');
});

app.get("*", (req,res)=>{
    res.render('404error');
});





app.listen(port, ()=>{
    console.log(`listining to http://${hostName}:${port}`);
})