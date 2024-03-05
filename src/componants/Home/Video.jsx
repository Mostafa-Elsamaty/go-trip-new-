import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Fragment } from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import vedio from "../.././imag/video-bg.jpg";


const Video = () => {
  return (
    <Fragment>
         <section className="video" style={{ background: `url(${vedio})` }}>
        <Container>
          <Row>
            <div className="video-caption">
              <div className="video-icon">
                <Link to='/'>
                  {" "}
                  <FontAwesomeIcon icon={faPlay} className="" />{" "}
                </Link>
              </div>
              <p className="pera1">
                {" "}
                LOVE WHERE YOU'RE GOING IN THE PERFECT TIME
              </p>
              <h2 className="pera2">Tripo is a World Leading Online</h2>
              <h2 className="pera3">Tour Booking Platform </h2>
            </div>
          </Row>
        </Container>
      </section>
    </Fragment>
  )
}

export default Video