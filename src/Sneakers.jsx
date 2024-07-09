/* eslint-disable react/prop-types */
// import React from 'react'

// eslint-disable-next-line react/prop-types

import SneakersImage from './assets/sneakers-right.svg'
export default function Sneakers({data, addToCart}) {
    
  return (
    <div className="display-card">
        {data.map((shoe) => {
            return (
                <div className='cards' key={shoe.id}>
                    <img src={SneakersImage} alt="" />
                    <div className="tag">
                        <p>{shoe.name}</p>
                        <span>{shoe.price}</span>
                    </div>
                    <div className="addtocart-btn" onClick={() => addToCart(shoe.id)}>Add to cart</div>
                </div>
            )
        })}
        
    </div>
  )
}
