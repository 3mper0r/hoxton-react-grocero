import items from "./store-items"

function Cart() {
    return (
        <div class="cart--item-list-container">
            <ul class="item-list cart--item-list">
                <li>
                    <img
                        class="cart--item-icon"
                        src={`${items.id} - ${items.name}.svg`}
                        alt={`${items.name}`}
                    />
                    <p>beetroot</p>
                    <button class="quantity-btn remove-btn center">-</button>
                    <span class="quantity-text center">1</span>
                    <button class="quantity-btn add-btn center">+</button>
                </li>
            </ul>
        </div>
    )
}

export default Cart

