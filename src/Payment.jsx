import { useCart } from './CartContext'
import { useNavigate } from 'react-router-dom'

function PaymentPage() {
  const { cart, addToCart, removeFromCart, total } = useCart()
  const navigate = useNavigate()

  const goBack = () => {
    navigate('/') // Navigate back to home page
  }

  return (
    <div className="container">
      {/* Main Payment Section */}
      <div className="main-content">
        <div className="payment-container">
          <h2>Payment Page</h2>
          <form>
            <label>
              Card Number:
              <input type="text" placeholder="1234 5678 9012 3456" />
            </label>
            <label>
              Expiry Date:
              <input type="text" placeholder="MM/YY" />
            </label>
            <label>
              CVV:
              <input type="password" placeholder="123" />
            </label>
            <div className="form-actions">
              <button type="button" onClick={goBack}>
                Return to Shopping
              </button>
              <button type="submit">Pay Now</button>
            </div>
          </form>
        </div>
      </div>

      {/* Cart Sidebar */}
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
        </div>
      </div>
    </div>
  )
}

export default PaymentPage
