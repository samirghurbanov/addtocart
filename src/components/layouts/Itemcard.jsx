import React from 'react'
import '../../Styles/itemcard.css'
const Itemcard = ({image,title,price}) => {
  return (
    <div>
      <div className='mx-0 mb-4 p-3 '>
      <div class="card p-0 overflow-hidden h-100 shadow w-100">
        <img style={{height: '300px'}} src={image} class="card-img-top img-fluid " />
        <div class="card-body">
          <h3 class="card-title box">{title}</h3>
          <h4 className='card-text'> {price} AZN</h4>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Itemcard
