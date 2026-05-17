import React from 'react'

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>

      <ul>
        {cart.length === 0 ? (
          <li>Your cart is empty.</li>
        ) : (
          cart.map((item, index) => (
            <li key={index}>
              {item.name} is in your cart.
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export default Cart