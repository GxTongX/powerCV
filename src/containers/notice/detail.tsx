import React, { useState, useEffect } from 'react';
import { Input, Button, List } from 'antd';
import { Container, Row, Col } from 'react-bootstrap';
import './index.css'

export default function NoticeDetail() {
  const [detail, setDetail] = useState("");
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [img, setImg] = useState([]);

  useEffect(() => {
    setTitle("这是标题")
    setTime("2020-8-10 10:20")
    setDetail("<p>&#8203;&nbsp;&nbsp;&nbsp;&nbsp;&#8203;郭同学呀<br></p><p>这是</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&#8203;大萨达撒多大萨达撒多大萨达撒多大萨达撒多大萨达撒多大萨达撒多大萨达撒多大萨达撒多大萨达撒多大萨达撒多大萨达撒多大萨达撒多大萨达撒多大萨达撒多大萨达撒多大萨达撒多大萨达撒多大萨达撒多大萨达撒多大萨达撒多大萨达撒多大萨达撒多大萨达撒多大萨达撒多大萨达撒多大萨达撒多大萨达撒多大萨达撒多大萨达撒多大萨达撒多大萨达撒多大萨达撒多大萨达撒多大萨达撒多大萨达撒多大萨达撒多</p><p><br></p><p>大萨达撒多大萨达撒多大萨达撒多大萨达撒多</p>")
  })
  function openNoticeDetail(item: any) {
    console.log(item);

  }
  return (
    <div className="notice-detail">
      <Row className="justify-content-md-center">
        {/* <Row> */}
        <Col xs="12" sm='12' md="9">
          <h5 className="title">{title}</h5>
          <div className="time">{time}</div>
          <div
            className='content'
            dangerouslySetInnerHTML={{ __html: detail }} />
        </Col>
      </Row>
    </div>
  )
}