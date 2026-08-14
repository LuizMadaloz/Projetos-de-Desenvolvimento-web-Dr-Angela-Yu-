import express from "express";
const app = express();
const port = 3200;

app.get("/", (req, res)=>{
    res.send("Hellow");
});

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});