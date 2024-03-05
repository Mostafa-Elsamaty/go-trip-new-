import React, { Fragment } from "react";
import testimonalImg from "../../imag/testimonial.png";
import testimonal from "../../imag/Homepage_testi.png";

const Testimonial = (props) => {
  return (
    <Fragment>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide testimonal "
        style={{ backgroundImage: `url(${props.backgrounImages})` }}
        >
        {/* <div  className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div> */}

        <div className="carousel-inner testimonal-caption">

          <div className="carousel-item active" data-bs-interval="10000">
            <div className="testimonal-img">
              <img src={testimonalImg} alt="testimonal" />
            </div>
            <p className="testimonal-text">
            Logisti Group is a representative logistics operator providing full range of ser
             of <br/>  customs clearance and transportation worl.
            </p>
            <div className="testimonal-founder d-flex just ">
              <div className="testimonal-founder-img">
                <img src={testimonal} alt="" />
              </div>
              <div  className="testimonal-founder-info" style={{color:`${props.color}`}}>
                <span> mostafa yahia</span>
                <p> co founder </p>
              </div>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="2000">
            <div className="testimonal-img">
              <img src={testimonalImg} alt="testimonal" />
            </div>
            <p className="testimonal-text">
            Logisti Group is a representative logistics operator providing full range of ser
             of <br/> customs clearance and transportation worl.
            </p>
            <div className="testimonal-founder d-flex just ">
              <div className="testimonal-founder-img">
                <img src={testimonal} alt="" />
              </div>
              <div  className="testimonal-founder-info" style={{color:`${props.color}`}}>
                <span> mostafa yahia</span>
                <p> co founder </p>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="testimonal-img">
              <img src={testimonalImg} alt="testimonal" />
            </div>
            <p className="testimonal-text">
            Logisti Group is a representative logistics operator providing full range of ser
             of <br/> customs clearance and transportation worl.
            </p>
            <div className="testimonal-founder d-flex just ">
              <div className="testimonal-founder-img">
                <img src={testimonal} alt="" />
              </div>
              <div  className="testimonal-founder-info" style={{color:`${props.color}`}}>
                <span> mostafa yahia</span>
                <p> co founder </p>
              </div>
            </div>
          </div>

        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    
    </Fragment>
  );
};

export default Testimonial;
