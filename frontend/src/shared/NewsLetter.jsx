import React from 'react'
import './newsletter.css'

import { Container, Row, Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const NewsLetter = () => {
  return (
    <section className='newsletter'>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="newsletter__content">
                        <h2>Subscribe to our newsletter</h2>

                        <div className="newsletter__input">
                            <input type="email" placeholder="Enter your email" />
                            <button className="btn newsletter__btn">Subscribe</button>
                        </div>

                        <p>Join us for our upcoming webinar on "Maximizing Your Travel Budget." 
                            Learn tips and strategies for getting the most value out of your travel expenses. 
                            Register on our website today!</p>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className="newsletter__img">
                        <img src={maleTourist} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default NewsLetter