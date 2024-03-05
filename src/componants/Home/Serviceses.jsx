import { faContactCard, faCreditCard, faThumbsUp, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment } from 'react'
import { Card, Container, Row } from 'react-bootstrap'

const services =[
    {
      id:1,
      icon :<FontAwesomeIcon icon={faUserAstronaut} />,
      title : " 8000+ Our Local \n Guides "
    },
    {
      id:2,
      icon :<FontAwesomeIcon icon={faCreditCard} />,
      title : "100% Trusted Tour \n agency"
    },
    {
      id:3,
      icon :<FontAwesomeIcon icon={faContactCard} />,
      title : "28+ Years of Travel \n experience"
    },
    {
      id:4,
      icon :<FontAwesomeIcon icon={faThumbsUp} />,
      title : "98% our travelers \n are  happy "
      
    },
  ];
const Serviceses = () => {
    const serve = services.map((serv)=>{
        return (
         
            <Card  key={serv.id} className='sevices col-lg-2 col-md-4'>
            <div className='serv-icon'>
             <span className='flaction-icon'> {serv.icon}</span>
            </div>
            <h5>{serv.title}</h5>
            </Card>
        )
      })
  return (
    <Fragment>
     <section className='serviceses'>
      <Container>
      <Row className='our-sevices col-lg-12 '>{serve}</Row>
      </Container>
      </section>
    </Fragment>
  )
}

export default Serviceses