const express=require('express')
const app=express()
const port=process.env.PORT||3000

app.use(express.static(__dirname+'/dist/ng1st'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/dist/ng1st/index.html')
})
app.listen(port,()=>{
    console.log('Running the port')
})