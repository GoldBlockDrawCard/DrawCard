import React from 'react'
import './ProfileSell.css'
import MenuButton from '../components/MenuButton'
import ProductCard from '../components/ProductCard';
import {Container,Row,Col, Button,  Dropdown, InputGroup,Form} from 'react-bootstrap'



const ProfileSell = () => {
  return (
    <div className="profile">
    <Container>
    
    <ProductCard/>


      <h2>프로필 이름</h2>
      <hr></hr>
     
      <div className="menu-buttons">
      <MenuButton name="구매 목록"/>
      <MenuButton name="판매 목록"/>
      <MenuButton name="판매 등록"/>
      </div>
      </Container>

      <Container className="main-area">
      <Row>
        <Col lg={5}><p className="text-right">디자인 이름</p></Col>
        <Col lg={7}> <input type="text" style={{width: "370px", border: "1px solid black", borderRadius:"5px"}}/>
        
        
        </Col>
      </Row>

      <Row>
        <Col lg={5}><p className="text-right">디자인 설명</p></Col>
        <Col lg={7}> <input type="text" style={{width: "370px", border: "1px solid black", borderRadius:"5px"}}/></Col>
      </Row>

      <Row>
        <Col lg={5}><p className="text-right">디자인 카테고리</p></Col>
        <Col lg={7}> 
          <Dropdown>
        <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
          
        </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">BEST</Dropdown.Item>
        <Dropdown.Item href="#/action-2">NORMAL</Dropdown.Item>
        <Dropdown.Item href="#/action-3">ART</Dropdown.Item>
        <Dropdown.Item href="#/action-4">EFFECT</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </Col>
      </Row>

      <Row>
        <Col lg={5}><p className="text-right">디자인 가격</p></Col>
        <Col lg={7}> <input type="text" style={{width: "370px", border: "1px solid black", borderRadius:"5px"}}/></Col>
      </Row>

      <Row>
        <Col lg={5}><p className="text-right">디자인 첨부</p></Col>
        <Col lg={3}><p>파일이름.jpg</p></Col>
        <Col lg={4}> <Button variant="warning">파일 선택</Button>{' '}</Col>
      </Row>


      <div className = "button-area">
      <Button variant="warning">등록</Button>{' '}
      <Button variant="warning">취소</Button>{' '}

      </div>

     </Container>    

     
   </div>
  )
}

export default ProfileSell