import React, {useState} from 'react';
// import { Menu, Dropdown } from 'antd';
// import { DownOutlined } from '@ant-design/icons';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './index.css'

export default function TopNav() {
  // const [name, setName] = useState("");
  const [isLogin, setIsLogin] = useState(false as boolean);
  return (
    <div className="header">
      <Navbar className="dropdown" bg="light" expand="lg">
        <Navbar.Brand href="#home">课程网站</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto header-center">
            <Nav.Link href="#home">首页</Nav.Link>
            <Nav.Link href="#course">课程信息</Nav.Link>
            <Nav.Link href="#notice">公告</Nav.Link>
            <Nav.Link href="#study">教学大纲</Nav.Link>
            <Nav.Link href="#article">技术文章</Nav.Link>
            <Nav.Link href="#book">电子书籍</Nav.Link>
            <Nav className="user-login-left"></Nav>
            {isLogin ? <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="user-login">
              <NavDropdown.Item href="#edit">修改密码</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">退出登录</NavDropdown.Item>
            </NavDropdown> : <Nav.Link href="#login">登录</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div >
  )
  // }
}