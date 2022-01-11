import { useState } from 'react'

import './App.css'
import './styles.css'
import './reset.css'
import Store from './components/store'
import Cart from './components/cart'
import Total from './components/total'

import items from './components/store-items'


function App() {

  const [store, setStore] = useState(items)
  // const [itemsInCart, setItemsInCart] = useState(items)
  // const [amountToPay, setAmountToPay] = useState(0)
  const cart = store.filter((item) => {
    return item.amount > 0

  })





  return (
    <div className="App">
      <header id="store">
        <h1>Grocero</h1>
        <Store
          store={store} />
      </header>

      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <Cart
            // itemsInCart={itemsInCart} 
            cart={cart} />
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <Total />
        </div>
      </main>
    </div>
  )
}

export default App
