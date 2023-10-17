import React from 'react'
import { Button } from 'react-bootstrap'

const MenuButton = (props) => {
  return (
    // 메뉴 버튼 작성자 이현일
    <div>
     <Button variant="warning">{props.name}</Button>{' '}
    </div>
  )
}

export default MenuButton