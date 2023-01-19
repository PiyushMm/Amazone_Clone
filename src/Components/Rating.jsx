import React from 'react'
import {FaStar} from 'react-icons/fa'

const Rating = ({rating}) =>{
    return  Array(5).fill().map((item,i)=><Star key  = {i} selected = {rating>i}/>)

}
  
   

  
   
  

const Star = ({selected}) =><FaStar color = {selected ? "red" : "grey"}/>

export default Rating;