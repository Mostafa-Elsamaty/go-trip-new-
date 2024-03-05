import React, { Fragment } from "react";
import contact from "../.././imag/contact_hero.jpg";
import "./Packages.css";
import { Placeses } from "../Placeses/Placeses";
import Header from "../HeaderSec/Header";

const Packages = (props) => {
  return (
    <Fragment>
      <Header title="our packages" bground = {contact}/> 
       <Placeses Place= {props.favouritePlaces}/>
    </Fragment>
  );
};

export default Packages;
