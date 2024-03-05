import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import './Header.css'

const Header = (props) => {
  return (
    <Fragment>
    <section
      className="packeges-header"
      style={{ background: `url(${props.bground})` }}
    >
      <Container>
        <h2>{props.title}</h2>
      </Container>
    </section>
  </Fragment>
  )
}

export default Header