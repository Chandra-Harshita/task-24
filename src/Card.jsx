import Shoedata from './Shoedata'
import { useCart } from './CartContext'
function Card() {
  const { addToCart } = useCart()
  return (
    <div className="shoe-grid">
      {Shoedata.map((shoe) => (
        <div className="shoe-card" key={shoe.id}>
          <img src={shoe.image} alt={shoe.name} className="shoe-image" />
          <div className="shoe-des">
            <h2 className="shoe-name">{shoe.name}</h2>
            <p className="shoe-description">{shoe.description}</p>
            <p className="shoe-price">${shoe.price}</p>
            <button onClick={() => addToCart(shoe)} className="button-add">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card
