

const server=require('express');
const app=server();

app.get('/welcome',(req,res)=>{
    res.set({'Content-Type': 'text/plain'})
    res.status(200).send("Welcome to Dominos!");
})


app.get('/contact',(req,res)=>{
    res.set({'Content-Type': 'application/json'})
    res.status(400).json({  
        phone: '18602100000', 
             email: 'guestcaredominos@jublfood.com' 
       }
       );
})

app.get('*',(req,res)=>{
    res.status(200).send('Page Not Found!!');
})
app.listen(8081);