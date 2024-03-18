const express=require('express');
const app=express();
const mongoose=require('mongoose');
const path=require('path');
const defaultTheme = require('tailwindcss/defaultTheme')

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    res.render('Content');
});

app.get('/Login',(req,res)=>{
    res.render('Login');
});

const PORT = 5000;
app.listen(PORT,()=>{
    console.log('server run at port ',PORT);
})