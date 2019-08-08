const express = require("express")
const app =express();

app.use(express.json())

app.get('/',(req,res) =>{
  res.send("the server is work now")
})



app.get('/tasks',(req,res)=>{
   res.json(tasks)
})

app.post('/tasks',(req,res)=>{
    let  body =(req.body.tasks)
    res.json(tasks)
 })


 app.delete('/tasks/:id',(req,res)=>{
     let id= parseInt(req.params.id)
    tasks.map(elememt=>{
        if(elememt.id ===id ){
         delete elememt.id
        }
    })
    res.json(tasks)
 })

const PORT =9000;

app.listen(PORT,()=> console.log(`the server is work now in port ${PORT}`))




tasks={
   works:[
       {
         id:1,
         title:"eating"
       },
       {
        id:2,
        title:"study "
      },
      {
        id:3,
        title:"pray "
      }

   ]
}