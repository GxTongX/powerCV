import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Input, Button, List } from 'antd';
import { Container, Row, Col } from 'react-bootstrap';
import './index.css'

const data = [
  {
    title: 'Ant Design Title 1Ant Design Title 1Ant Design Title 1',
    time: '2017-1-1 10:20',
    id: "1"
  },
  {
    title: 'Ant Design Title 2',
    time: '2017-1-1 10:20',
    id: "2"
  },
  {
    title: 'Ant Design Title 3',
    time: '2017-1-1 10:20',
    id: "3"
  },
  {
    title: 'Ant Design Title 4',
    time: '2017-1-1 10:20',
    id: "4"
  },
];


export default function Notice() {
  const [noticeList, setNoticeList] = useState([] as any);
  const [query, setQuery] = useState("");
  const history = useHistory();

  useEffect(() => {
    setNoticeList(data)
  }, [])

  function queryChange(e: any) {
    setQuery(e.target.value);
    console.log(e)
  }
  function openNoticeDetail(item: any) {
    console.log(item);
    history.push(`notice/detail/${item.id}`)
  }
  return (
    <div className="notice">
      <Row className="justify-content-md-center">
        {/* <Row> */}
        <Col xs={{ span: 7 }} sm='7' md="7">
          <Input value={query} onChange={queryChange}/>
        </Col>
        <Col xs="3" lg="1">
          <Button>搜索</Button>
        </Col>
      </Row>
      <Row className="data-list">
        <Col>
          <List
            size="small"
            bordered
            dataSource={data}
            renderItem={item => <List.Item>
              <div className="data-list-item" onClick={() => {openNoticeDetail(item)}}>
                <div className="data-list-title">{item.title}</div>
                <div className="data-list-time">{item.time}</div>
              </div>
            </List.Item>}
          />
        </Col>
      </Row>
    </div>
  )
}