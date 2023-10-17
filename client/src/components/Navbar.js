import React from 'react'
import { Container,Form,Button } from 'react-bootstrap'
import '../App.css';


const Navbar = () => {

  return (
    // 네비바 페이지 작성자 이현일
    <div>

    <Container className="nav-item">
    <Button variant="success">메인 아이콘</Button>{' '}
    <input type="text" placeholder="검색 창" style={{width: "700px"}}/>


    <Button variant="primary">지갑 아이콘</Button>{' '}
    <Button variant="primary">프로필 아이콘</Button>{' '}

    </Container>



    </div>
  )
}

export default Navbar