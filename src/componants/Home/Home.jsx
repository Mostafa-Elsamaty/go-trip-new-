
import { Fragment } from 'react';
import backgrounImag from "../../imag/testimonial_bg.jpg";

import Landing from './Landing';
import Serviceses from './Serviceses';
import './Home.css'
import { Placeses } from '../Placeses/Placeses';
import Video from './Video';
import Support from './Support';
import Testimonial from './Testimonial';

const colors = "#ffffff";

function Home(props) {
  const homePlace = props.favouritePlaces.filter((ele)=>{
    return ele.id <= 6;
  })
  return (
    <Fragment  >

      <Landing/>
      <Serviceses/>
      <Placeses Place={homePlace}/>
      <Video/>
      <Support/>
      <Testimonial backgrounImages={backgrounImag} color={colors}/>
    </Fragment>
  );
}

export default Home;