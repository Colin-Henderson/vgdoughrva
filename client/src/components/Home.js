import React from "react";
import { Jumbotron, Container } from 'reactstrap';

const Background ={
    backgroundImage: "url('/images/bg1.png')",
    // Function in Css calculating the correct height of the image
    height: "calc(100vh - 108px)",
    // backgroundRepeat: "noRepeat"
    width: "100%",
    backgroundSize: "cover"
  };

const Font ={
    color: "white",
    textAlign: "center",
    textShadow: "2px 2px black"
};


const Home = (props) => 
<div style={Background}>
    <br></br><br></br><br></br>
   {/* <h1 style={Font}> Van Goghs Dough</h1> */}
   <div>
         {/* <Jumbotron fluid style={{opacity: "50%"}}> */}
           <Container>
             <h1 className="display-3" style={Font}>Welcome. </h1>
             <h2 style={Font}>Van Gogh's Dough. Custom Pizzas, On-Demand.</h2>
             <h3 style={Font}> 1. Choose Design & toppings</h3>
             <h3 style={Font}> 2. Choose When & Where</h3>
             <h3 style={Font}> 3. Hit Request</h3>             
             <h3 style={Font}> 4. Pizza Delivered</h3>  
             <h3 style={Font}> 5. Leave us a review (unless its bad) & Share with Friends</h3>                      
           </Container>
         {/* </Jumbotron> */}
       </div>
</div>   

export default Home;