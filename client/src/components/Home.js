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

// const Font ={
//     color: "white",
//     textAlign: "center"
// };


const Home = (props) => 
<div style={Background}>
    <br></br>
   {/* <h1 style={Font}> Van Goghs Dough</h1> */}
   <div>
         <Jumbotron fluid style={{opacity: "50%"}}>
           <Container fluid>
             <h1 className="display-3">Welcome. </h1>
             <p className="lead">Van Gogh's Dough. Custom Pizzas, On-Demand.</p>
             <p> 1. Choose Design & toppings</p>
             <p> 2. Choose When & Where</p>
             <p> 3. Hit Request</p>             
             <p> 4. Pizza Delivered</p>  
             <p> 5. Leave us a review (unless its bad) & Share with Friends</p>                      
           </Container>
         </Jumbotron>
       </div>
</div>   

export default Home;