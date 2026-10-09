import express from "express";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

let posts = [];

app.get("/", (req,res)=>{
    res.render("index.ejs");
});

app.post("/envioPost",(req,res)=>{
    const novoPost ={
        titulo: req.body.titulo,
        conteudo: req.body.blogText,
        data: new Date().toLocaleDateString("PT-BR")

    };

    posts.push(novoPost);

    res.redirect("/");
});




app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
