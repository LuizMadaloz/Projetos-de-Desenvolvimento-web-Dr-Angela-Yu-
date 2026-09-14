import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res)=>{
  res.sendFile(__dirname + "/public/index.html")
}); 

app.post("/submit", (req, res) => {
  console.log(req.body); 
  const pet = req.body.pet;
  const rua = req.body.street;
  res.send(`<h1> junção dos dois :</h1><pre>${rua}${pet}</pre>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
