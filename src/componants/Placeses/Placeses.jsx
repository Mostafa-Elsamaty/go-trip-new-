import React, { Fragment } from 'react'
import { Card, Container, Row } from "react-bootstrap";
import './Placeses.css'

export const Placeses = (props) => {
    const favouritePlace = props.Place.map((place) => {
        return (
          <Card key={place.id} className="col-lg-3 col-md-3 col-sm-4 place-cap">
            <div className="card-img">
              <Card.Img variant="top" src={place.img} className="img" />
            </div>
            <Card.Body className="place-cap-text">
              <Card.Text className="evalution">
                <span>{place.icon}</span>
                <span className="evalution-text">8.0 superb</span>
              </Card.Text>
    
              <Card.Title className="place-cap-text-title">
                <h3>{place.title}</h3>
              </Card.Title>
    
              <Card.Text className="place-cap-text-price">
                <span>{place.price}</span>
                <span>/ per person</span>
              </Card.Text>
    
              <Card.Text>
                <span className="time">
                  <span>{place.iconTime}</span>
                  <span>{place.time}</span>
                </span>
    
                <span className="location">
                  <span>{place.iconLocation}</span>
                  <span>{place.location}</span>
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
        );
      });
  return (
    <Fragment>
        <section className="favouritePlaces">
        <Container>
          <Row>
            <div className=" favouritePlaces-title ">
              <p>FEATURED TOURS PACKAGES</p>
              <h2> Favourite Places</h2>
            </div>
          </Row>
        </Container>
        <Container>
          <Row className="col-lg-12 favouritePlace"> {favouritePlace} </Row>
        </Container>
        </section>
    </Fragment>
  )
}
