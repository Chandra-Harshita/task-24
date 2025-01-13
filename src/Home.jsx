import { useCart } from './CartContext'

import Card from './Card'
import { Link } from 'react-router-dom'

function HomePage() {
  const { cart, addToCart, removeFromCart, total } = useCart()
  return (
    <>
      <header className="header">
        <h1>Logo</h1>
        <div className="headele">
          <p>Home</p>
          <p>Categories</p>
          <p>About Us</p>
        </div>
      </header>

      <div className="container">
        <div className="main-content">
          <Card addToCart={addToCart} />
        </div>
        <div className="cart-container">
          <div className="cart">
            <h2>Cart</h2>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <ul className="cart-items">
                {cart.map((item) => (
                  <li className="cart-item" key={item.id}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-image"
                    />
                    <div className="cart-item-details">
                      <p className="cart-item-name">{item.name}</p>
                      <p className="cart-item-price">${item.price}</p>
                    </div>
                    <div className="cart-item-controls">
                      <button onClick={() => removeFromCart(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => addToCart(item)}>+</button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <h3 className="cart-total">Total: ${total.toFixed(2)}</h3>
            <Link to="/payment">
              <button className="proceed-to-payment">Proceed to Payment</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
