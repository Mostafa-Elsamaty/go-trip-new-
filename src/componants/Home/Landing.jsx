import React, { Fragment } from "react";
import logo from "../.././imag/h1_hero.jpg";
import hero from "../.././imag/hero-_ineShape.png";
import { Button, Container, Row } from "react-bootstrap";

const Landing = () => {
  return (
    <Fragment>
      <section style={{ backgroundImage: `url(${logo})` }} className="landing">
        <Container  >
          <div className="box">

          <Row>
            <div className="col-sm-12 landing_Text">
              <h2 >
                find your <span>next tour
                  <img src={hero} alt="hero_imag"/>
                </span>
              </h2>
            </div>
          </Row>

          <Row>
            <div className="col-lg-12 text" >
              <h4>where would you like to go ? </h4>
              <form  className="landing_form col-sm-12  ">
                <input className="col-lg-5 col-xs-12 col-md-8 "
                  type="text"
                  placeholder="where would you like to go ? "
                ></input>
                <select className="col-lg-4 col-xs-12 col-md-8">
                  <option>where</option>
                  <option value=''>serveces 1</option>
                  <option value=''>serveces 1</option>
                  <option value=''>serveces 1</option>
                  <option value=''>serveces 4</option>
                </select>
                <Button className="col-lg-2 col-xs-12 col-md-8" type="submit"> search</Button>
              </form>
            </div>
          </Row>

          </div>
        </Container>
      </section>
    </Fragment>
  );
};

export default Landing;
