import React, { Fragment } from "react";
import about from "../.././imag/blog.jpg";
import Header from "../HeaderSec/Header";
import Video from "../Home/Video";
import Support from "../Home/Support";
import Serviceses from "../Home/Serviceses";
import Testimonial from "../Home/Testimonial";

const colors = "#00233f";
const About = () => {
  return (
    <Fragment>
            <Header title="about us" bground = {about}/> 
            <Support/>
             <Serviceses/>
             <Video/>
             <Testimonial color={colors} />
             
    </Fragment>
  );
};

export default About;
