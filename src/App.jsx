import { useState } from 'react'

import './App.css'
import './styles.css'
import './reset.css'
import Store from './components/store'
import Cart from './components/cart'
import Total from './components/total'

import items from './components/store-items'



// function Store() {
//   return Store_Items.map(storeItem => <StoreItem item={storeItem} />)
// }


function App() {

  const [store, setStore] = useState(items)



  return (
    <div className="App">

      <header id="store">
        <h1>Grocero</h1>
        <Store />
      </header>

      <main id="cart">
        <h2>Your Cart</h2>

        <Cart />

        <div class="total-section">
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
