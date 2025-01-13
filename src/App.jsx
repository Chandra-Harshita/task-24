import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { CartProvider } from './CartContext'
import Home from './Home'
import Payment from './Payment'
import './App.css'

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App
