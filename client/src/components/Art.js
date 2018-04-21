import React from "react";
import { Card, CardImg, CardDeck} from 'reactstrap';

const Art = () => {
    return (
    <div>
        <div>
      <CardDeck>
        <Card>
          <CardImg top width="100%" src={require('./images/art1.png')} alt="Card image cap" style={{padding:'25'}}/>
        </Card>
        <Card>
          <CardImg top width="100%" src={require('./images/art2.png')} alt="Card image cap" />
        </Card>  
        <Card>
          <CardImg top width="100%" src={require('./images/art3.png')} alt="Card image cap" />
        </Card>
      </CardDeck>
      </div>
      <div>
      <CardDeck>
        <Card>
          <CardImg top width="100%" src={require('./images/art4.png')} alt="Card image cap" />
        </Card>
        <Card>
          <CardImg top width="100%" src={require('./images/art5.png')} alt="Card image cap" />
        </Card>  
        <Card>
          <CardImg top width="100%" src={require('./images/art6.png')} alt="Card image cap" />
        </Card>
      </CardDeck>
      </div>
      <div>
      <CardDeck>
        <Card>
          <CardImg top width="100%" src={require('./images/art7.png')} alt="Card image cap" />
        </Card>
        <Card>
          <CardImg top width="100%" src={require('./images/art8.png')} alt="Card image cap" />
        </Card>  
        <Card>
          <CardImg top width="100%" src={require('./images/art9.png')} alt="Card image cap" />
        </Card>
      </CardDeck>
      </div>
      <div>
      <CardDeck>
        <Card>
          <CardImg top width="100%" src={require('./images/art10.png')} alt="Card image cap" />
        </Card>
        <Card>
          <CardImg top width="100%" src={require('./images/art11.png')} alt="Card image cap" />
        </Card>  
        <Card>
          <CardImg top width="100%" src={require('./images/art12.png')} alt="Card image cap" />
        </Card>
      </CardDeck>
      </div>
      <div>
      <CardDeck>
        <Card>
          <CardImg top width="100%" src={require('./images/art13.png')} alt="Card image cap" />
        </Card>
        <Card>
          <CardImg top width="100%" src={require('./images/art1.png')} alt="Card image cap" />
        </Card>  
        <Card>
          <CardImg top width="100%" src={require('./images/art2.png')} alt="Card image cap" />
        </Card>
      </CardDeck>
      </div>
      {/* <div>
      <CardDeck>
        <Card>
          <CardImg top width="100%" src={require('./images/art')} alt="Card image cap" />
        </Card>
        <Card>
          <CardImg top width="100%" src={require('./images/art')} alt="Card image cap" />
        </Card>  
        <Card>
          <CardImg top width="100%" src={require('./images/art')} alt="Card image cap" />
        </Card>
      </CardDeck>
      </div>
      <div>
      <CardDeck>
        <Card>
          <CardImg top width="100%" src={require('./images/art')} alt="Card image cap" />
        </Card>
        <Card>
          <CardImg top width="100%" src={require('./images/art')} alt="Card image cap" />
        </Card>  
        <Card>
          <CardImg top width="100%" src={require('./images/art')} alt="Card image cap" />
        </Card>
      </CardDeck>
      </div> */}
    </div>
    );
  };
export default Art;