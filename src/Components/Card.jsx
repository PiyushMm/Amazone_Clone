
import React from 'react'
import Rating from './Rating'
import { useStateValue } from './StateProvider'


export default function Card(props) {
  const { title, price, rating, imageURL } = props;
  const { myreducer } = useStateValue();
  const [,dispatch] = myreducer;


  const clickHandler = (selectedValue) => {
    const timeStame = new Date().getTime();
    selectedValue  = {...selectedValue, id: timeStame};
    
    dispatch({
      type: 'ADD_TO_CART',
      payload: selectedValue
    })
  }

  return (

    <div className='card'>
      <p className='title'>{title}</p>
      <p className='price'>&#8377;{price}</p>
      <p className='starRating'><Rating rating={rating} /></p>
      <div className='imageHolder' >
        <img src={imageURL} alt='cardItem' />
        <br />
        <br />
        <button onClick={()=>clickHandler(props)}>Add to Cart</button>
      </div>

    </div>


  )
}
