import React from "react";
import { Card, CardImg, CardDeck} from 'reactstrap';


// Really would be nice to get an array of all of these images and use just one Card Deck to render all of these guys 
const Gallery = () => {
    return (
    <div>
        <div>
      <CardDeck>
        <Card>
          <CardImg top width="100%" src={require('./images/pizza.png')} alt="Card image cap" style={{padding:'25'}}/>
        </Card>
        <Card>
          <CardImg top width="100%" src={require('./images/pizza2.png')} alt="Card image cap" />
        </Card>  
        <Card>
          <CardImg top width="100%" src={require('./images/pizza3.png')} alt="Card image cap" />
        </Card>
      </CardDeck>
      </div>
      <div>
      <CardDeck>
        <Card>
          <CardImg top width="100%" src={require('./images/pizza4.png')} alt="Card image cap" />
        </Card>
        <Card>
          <CardImg top width="100%" src={require('./images/pizza6.png')} alt="Card image cap" />
        </Card>  
        <Card>
          <CardImg top width="100%" src={require('./images/pizza5.png')} alt="Card image cap" />
        </Card>
      </CardDeck>
      </div>
      <div>
      <CardDeck>
        <Card>
          <CardImg top width="100%" src={require('./images/pizza7.png')} alt="Card image cap" />
        </Card>
        <Card>
          <CardImg top width="100%" src={require('./images/pizza8.png')} alt="Card image cap" />
        </Card>  
        <Card>
          <CardImg top width="100%" src={require('./images/pizza9.png')} alt="Card image cap" />
        </Card>
      </CardDeck>
      </div>
      <div>
      <CardDeck>
        <Card>
          <CardImg top width="100%" src={require('./images/pizza10.png')} alt="Card image cap" />
        </Card>
        <Card>
          <CardImg top width="100%" src={require('./images/pizza11.png')} alt="Card image cap" />
        </Card>  
        <Card>
          <CardImg top width="100%" src={require('./images/pizza12.png')} alt="Card image cap" />
        </Card>
      </CardDeck>
      </div>
      <div>
      <CardDeck>
        <Card>
          <CardImg top width="100%" src={require('./images/pizza13.png')} alt="Card image cap" />
        </Card>
        <Card>
          <CardImg top width="100%" src={require('./images/pizza14.png')} alt="Card image cap" />
        </Card>  
        <Card>
          <CardImg top width="100%" src={require('./images/pizza15.png')} alt="Card image cap" />
        </Card>
      </CardDeck>
      </div>
      {/* <div>
      <CardDeck>
        <Card>
          <CardImg top width="100%" src={require('./images/pizza.png')} alt="Card image cap" />
        </Card>
        <Card>
          <CardImg top width="100%" src={require('./images/pizza.png')} alt="Card image cap" />
        </Card>  
        <Card>
          <CardImg top width="100%" src={require('./images/pizza.png')} alt="Card image cap" />
        </Card>
      </CardDeck>
      </div>
      <div>
      <CardDeck>
        <Card>
          <CardImg top width="100%" src={require('./images/pizza.png')} alt="Card image cap" />
        </Card>
        <Card>
          <CardImg top width="100%" src={require('./images/pizza.png')} alt="Card image cap" />
        </Card>  
        <Card>
          <CardImg top width="100%" src={require('./images/pizza.png')} alt="Card image cap" />
        </Card>
      </CardDeck>
      </div> */}
    </div>
    );
  };
export default Gallery;