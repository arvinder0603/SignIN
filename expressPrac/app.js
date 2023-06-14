const express=require('express');
const app=express();



 const data= fetch('https://www.natours.dev/api/v1/tours');
 const res=data.json();

 console.log(res);
