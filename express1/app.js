 //import the express package an this return if function
 const express =require('express');
 //call the function ans that return object
let app = express();
// the app object contain a lot of method so can I used it one of them listen to create server
//  Route =URL + HTTP method


//you can return html or text,you can set the status code but should be before the send
//because it a chaining method before send the response I want to set the status code ,content type of response is text/html




//******************************Code****************************** */
// app.get('/',(req,res)=>{
// res.status(200).send('hello from express server') 
// })




//so If I want to send a json replace send method to the json
// content-type be a application/json when using this method



//***********************code************************************* */
app.get ('/',(req,res)=>{
res.status(200).json({message:"Hello world",status:200})
})

//create server in express
const port =4000
app.listen(port,(req,res)=>{
console.log("server has started ....")
})
//now we want to handle some routes

//method inside the app object:
   //   1-listen:to create a server
   //   2-get :to handle the get request accept to argument the url of roote and the callbackfunction
   //   3-send method use  to send the res