import React from 'react';
import './styles.css';

import { useCart } from '../../../providers/CartProvider';

const CartSummary = () => {
  const { cart } = useCart();
  
  return (
    <div className="cart-summary">
      <div className="cart-summary-item">
        <h4 className="summary-title">Order Summary</h4>
        <div className="summary-wrapper">
          {cart.map((product, index) => (
            <div className="summary-items" key={ index }>
              <h4 className="summary-item-title">
                <p>
                  { product.title }
                  <span> x{ product.quantity }</span>
                </p>
              </h4>
              <span className="summary-item-price">
                $ { product.price },00
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CartSummary;