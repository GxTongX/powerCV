import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './index.css'

interface homeProps {

}
interface homeState {

}

export default function Home() {
  const [noticeList, setNoticeList] = useState([]);
  useEffect(() => {
    console.log(noticeList);
    
  })
  return (
    <div className="contain">
      <Container>
        <Row className="justify-content-md-center">
          <Col lg="2">
            1 of 3
          </Col>
          <Col md="auto">Variable width content</Col>
          <Col lg="2">
            3 of 3
          </Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col md="auto">Variable width content</Col>
          <Col xs lg="2">
            3 of 3
          </Col>
        </Row>
      </Container>
    </div>
  )
}