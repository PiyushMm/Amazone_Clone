
import { ListItem } from '@mui/material';
import React from 'react'
import Card from './Card'
// import { initialState } from './Reducer';
import { useStateValue } from './StateProvider'


export default function ProductList() {
  const {initialState} = useStateValue();
  
  

  return (
    <div className='productList'>
      {initialState.productList.map((item,index) =><Card key = {index}   title = {ListItem.title} {...item} />)}
    
    </div>
  )
}
