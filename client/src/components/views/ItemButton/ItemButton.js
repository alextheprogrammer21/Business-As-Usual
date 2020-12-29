import React from 'react'
import "./ItemButton.css"
import {Button} from 'antd'
import {PlusCircleFilled} from '@ant-design/icons'
function ItemButton(){
  return(
    <>
    <Button type="primary"> Add Item <PlusCircleFilled/></Button>
    </>
  )
}
export default ItemButton;