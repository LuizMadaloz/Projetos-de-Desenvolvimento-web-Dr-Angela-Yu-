import express from "express";
const app = express();
const port = 3200;

app.get("/", (req, res)=>{
    res.send("<h1>Hellow</h1>");
});

app.get("/about", (req, res) =>{
    res.send('<h1>Sobre nós</h1>');
});

app.get("/contact", (req, res) =>{
    res.send('<h1>Nosso contato</h1>');
});

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});