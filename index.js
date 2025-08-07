const express = require('express');
const app = express();
const port =3000;

const {data}= require('./data.js');

//Function to return ip addresses and filter if the optional filter param is provided
app.get('/api/ipaddresses',(req,res)=>{
    const filter= req.query.filter;
    //If the filter is not provided or the wrong filter is provided all the data will be returned.
    //If the correct filter is provided, the matching data will be returned
    const filteredIPs= filter? data.filter(o=>o.includes(filter)): data;
    res.json(filteredIPs);
});

//Start Server
app.listen(port,()=>{
console.log('Server is running on port'+port);
})