import React, { Fragment } from 'react'
import {Container,  Form,  Row } from 'react-bootstrap'
import support from '../../imag/support-img.jpg'
// import './'

const Support = () => {
  return (
    <Fragment>
      <Container>
        <Row>
          <section className="support-company-area">
            <div className="support-location-img col-lg-6 col-md-12">
              <div className="support-img-com">
                <img src={support} alt="support-img" />
              </div>
              <div className="support-img-time">
                <span>since 1992</span>
              </div>
            </div>

            <div className="right-caption col-lg-6 col-md-12">
              <span> ABOUT OUR COMPANY</span>
              <h2> We are Go Trip <br/> Ravels Support Company </h2>

              <div className="support-caption">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud
                </p>
                
             
            <Form className='form' >
            <Form.Check className='form-check' type="checkbox" id="disabledFieldsetCheck" label="Lorem ipsum dolor sit amet"/>
            <Form.Check className='form-check' type="checkbox" id="disabledFieldsetCheck" label="consectetur adipisicing sed do"/>
            <Form.Check className='form-check' type="checkbox" id="disabledFieldsetCheck" label="eiusmod tempor incididunt"/>
            <Form.Check className='form-check' type="checkbox" id="disabledFieldsetCheck" label="ad minim veniam, quis nostrud"/>
            </Form>
            <button className='support-btn'>about us</button>
              </div>
            </div>
          </section>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Support;