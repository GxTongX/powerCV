import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Input, Button, List } from 'antd';
import { Container, Row, Col } from 'react-bootstrap';
import './index.css'

interface LoginProps {

}
interface LoginState {

}

const data = [
  {
    title: 'Ant Design Title 1Ant Design Title 1Ant Design Title 1',
    des: '2017-1-1 10:20',
    img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598296857342&di=763f463d49b4d664329954d692463405&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Ffront%2F21%2Fw690h931%2F20181117%2F2N7a-umqawqs4929585.jpg',
    id: "1"
  },
  {
    title: 'Ant Design Title 2',
    des: '2017-1-1 10:20',
    img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598296857342&di=763f463d49b4d664329954d692463405&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Ffront%2F21%2Fw690h931%2F20181117%2F2N7a-umqawqs4929585.jpg',
    id: "2"
  },
  {
    title: 'Ant Design Title 3',
    des: '2017-1-1 10:20',
    img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598296857342&di=763f463d49b4d664329954d692463405&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Ffront%2F21%2Fw690h931%2F20181117%2F2N7a-umqawqs4929585.jpg',
    id: "3"
  },
  {
    title: 'Ant Design Title 4',
    des: '2017-1-1 10:20',
    img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598296857342&di=763f463d49b4d664329954d692463405&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Ffront%2F21%2Fw690h931%2F20181117%2F2N7a-umqawqs4929585.jpg',
    id: "4"
  },
];

export default function Book() {
  const [bookList, setBookList] = useState([] as any);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setBookList(data)
  }, [])

  function queryChange(e: any) {
    setQuery(e.target.value);
    console.log(e)
  }
  function downloadBook(item: any) {
    console.log(item);

  }
  return (
    <div className="book">
      <Row className="justify-content-md-center">
        {/* <Row> */}
        <Col xs={{ span: 7 }} sm='7' md="7">
          <Input value={query} onChange={queryChange} />
        </Col>
        <Col xs="3" lg="1">
          <Button>搜索</Button>
        </Col>
      </Row>
      <Row className="book-list">
        {
          bookList.map((item: any) => {
            return (
              <Col className="book-list-item" key={item.id} xs="12" sm="6" lg="4">
                <img className="book-list-item-img" src={item.img} alt="" />
                <div>{item.title}</div>
                <div>{item.des}</div>
              </Col>
            )
          })
        }
      </Row>
    </div>
  )
}