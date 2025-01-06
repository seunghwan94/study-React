import React from 'react';
import {Container, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      {/* 
        Router의 Link 컴포넌트는 직접적 페이지 이동 담당 
        path relative : 상대 경로 지정 가능
      */}
      <Navbar bg="light" expand="lg" className='mb-4' sticky='top'>
      <hr className='w-50'/>
        <Container>
          <Navbar.Brand as={Link} to="/">React Sample Post</Navbar.Brand>
          <Nav variant="pills" defaultActiveKey="link-0" className='me-auto'>
            <Nav.Item>
              <Nav.Link as={Link} to="/" eventKey="link-0" >Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/posts" eventKey="link-1">Posts</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>

      <hr className='w-50'/>
      </Navbar>
    </>
  );
}

export default Header;
