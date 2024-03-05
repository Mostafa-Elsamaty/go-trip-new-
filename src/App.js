import React from 'react'
import './App.css'
import { Route, RouterProvider, createHashRouter, createRoutesFromElements } from 'react-router-dom'
import LayOut from './componants/LayOut/LayOut'
import Home from './componants/Home/Home'
import Packages from './componants/Packages/Packages'
import About from './componants/About/About'
import Blog from './componants/Blog/Blog'
import Pages from './componants/Pages/Pages'
import Contact from './componants/Contact/Contact'
import servises1 from "./imag/services1.jpg";
import servises2 from "./imag/services2.jpg";
import servises3 from "./imag/services3.jpg";
import servises4 from "./imag/services4.jpg";
import servises5 from "./imag/services5.jpg";
import servises6 from "./imag/services6.jpg";
import servises7 from "./imag/services7.jpg";
import servises8 from "./imag/services8.jpg";
import servises9 from "./imag/services9.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot} from "@fortawesome/free-solid-svg-icons";
import { faClock, faStar } from "@fortawesome/free-regular-svg-icons";

const favouritePlaces = [
  {
    id: 1,
    img: servises1,
    icon: < FontAwesomeIcon icon={faStar} className="icon evalution-icon" />,
    title: "the dark forest adventure",
    price: "$1870",
    iconTime: <FontAwesomeIcon icon={faClock} className="icon time-icon" />,
    time: "3 dayes",
    iconLocation: (
      <FontAwesomeIcon icon={faLocationDot} className="icon location-icon" />
    ),
    location: "los angeles",
  },
  {
    id: 2,
    img: servises2,
    icon: <FontAwesomeIcon icon={faStar} className="icon evalution-icon" />,
    title: "the dark forest adventure",
    price: "$1870",
    iconTime: <FontAwesomeIcon icon={faClock} className="icon time-icon" />,
    time: "3 dayes",
    iconLocation: (
      <FontAwesomeIcon icon={faLocationDot} className="icon location-icon" />
    ),
    location: "los angeles",
  },
  {
    id: 3,
    img: servises3,
    icon: <FontAwesomeIcon icon={faStar} className="icon evalution-icon" />,
    title: "the dark forest adventure",
    price: "$1870",
    iconTime: <FontAwesomeIcon icon={faClock} className="icon time-icon" />,
    time: "3 dayes",
    iconLocation: (
      <FontAwesomeIcon icon={faLocationDot} className="icon location-icon" />
    ),
    location: "los angeles",
  },
  {
    id: 4,
    img: servises4,
    icon: <FontAwesomeIcon icon={faStar} className="icon evalution-icon" />,
    title: "the dark forest adventure",
    price: "$1870",
    iconTime: <FontAwesomeIcon icon={faClock} className="icon time-icon" />,
    time: "3 dayes",
    iconLocation: (
      <FontAwesomeIcon icon={faLocationDot} className="icon location-icon" />
    ),
    location: "los angeles",
  },
  {
    id: 5,
    img: servises5,
    icon: <FontAwesomeIcon icon={faStar} className="icon evalution-icon" />,
    title: "the dark forest adventure",
    price: "$1870",
    iconTime: <FontAwesomeIcon icon={faClock} className="icon time-icon" />,
    time: "3 dayes",
    iconLocation: (
      <FontAwesomeIcon icon={faLocationDot} className="icon location-icon" />
    ),
    location: "los angeles",
  },
  {
    id: 6,
    img: servises6,
    icon: <FontAwesomeIcon icon={faStar} className="icon evalution-icon" />,
    title: "the dark forest adventure",
    price: "$1870",
    iconTime: <FontAwesomeIcon icon={faClock} className="icon time-icon" />,
    time: "3 dayes",
    iconLocation: (
      <FontAwesomeIcon icon={faLocationDot} className="icon location-icon" />
    ),
    location: "los angeles",
  },
  {
    id: 7,
    img: servises7,
    icon: <FontAwesomeIcon icon={faStar} className="icon evalution-icon" />,
    title: "the dark forest adventure",
    price: "$1870",
    iconTime: <FontAwesomeIcon icon={faClock} className="icon time-icon" />,
    time: "3 dayes",
    iconLocation: (
      <FontAwesomeIcon icon={faLocationDot} className="icon location-icon" />
    ),
    location: "los angeles",
  },
  {
    id: 8,
    img: servises8,
    icon: <FontAwesomeIcon icon={faStar} className="icon evalution-icon" />,
    title: "the dark forest adventure",
    price: "$1870",
    iconTime: <FontAwesomeIcon icon={faClock} className="icon time-icon" />,
    time: "3 dayes",
    iconLocation: (
      <FontAwesomeIcon icon={faLocationDot} className="icon location-icon" />
    ),
    location: "los angeles",
  },
  {
    id: 9,
    img: servises9,
    icon: <FontAwesomeIcon icon={faStar} className="icon evalution-icon" />,
    title: "the dark forest adventure",
    price: "$1870",
    iconTime: <FontAwesomeIcon icon={faClock} className="icon time-icon" />,
    time: "3 dayes",
    iconLocation: (
      <FontAwesomeIcon icon={faLocationDot} className="icon location-icon" />
    ),
    location: "los angeles",
  },
];
const router = createHashRouter (
  createRoutesFromElements (
    <Route path='/' element={ <LayOut/> } >
      <Route path='/home' element={<Home favouritePlaces={favouritePlaces}/>} />
      <Route path='/package' element={<Packages favouritePlaces={favouritePlaces}/>} />
      <Route path='/about'  element={<About/>} />
      <Route path='/blog'  element={<Blog/>} />
      <Route path='/pages'  element={<Pages/>} />
      <Route path='/contact' element={<Contact/>} />
    </Route>
  )
)
const App = () => {
  return (
    <RouterProvider  router={router}/> 
  )
}

export default App