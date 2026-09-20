import express from "express"

const app = express();
const port = 3000;



app.get("/",(req,res)=>{
    let  fSemana = 0;
    const hoje = new Date().getDay();
    if (hoje === 0 || hoje === 6){
       fSemana = 1;
    }
   res.render("index.ejs",{fds : fSemana})
  
   })

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
});
