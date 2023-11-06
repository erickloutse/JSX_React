import React from "react";
import "./App.css";
import product from "./product";
import Name from "./name";
import Price from "./price";
import Description from "./description";
import Card from "react-bootstrap/Card";
import Navbar from "./Navbar";

const firstName = "Eric";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          {product.map((item, index) => (
            <div className="col-md-4" key={index}>
              <Card className="custom-card">
                <Card.Img
                  className="custom-image"
                  variant="top"
                  src={item.image}
                />
                <Card.Body>
                  <Name name={item.name} />
                  <Price price={item.price} />
                  <Description description={item.description} />
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div>
        {firstName ? <p>Bonjour, {firstName} !</p> : <p>Bienvenue !</p>}
      </div>
    </div>
  );
}

export default App;
