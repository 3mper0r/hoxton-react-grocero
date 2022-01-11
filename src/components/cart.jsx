function Cart(props) {
    return (

        <ul class="item-list cart--item-list">
            {
                props.cart.map((item) => {
                    return < li >
                        <img
                            class="cart--item-icon"
                            src={`./assets/icons/${item.id}-${item.name}.svg`}
                            alt={item.name}
                        />
                        <p>{item.name}</p>
                        <button class="quantity-btn remove-btn center">-</button>
                        <span class="quantity-text center">{item.total}</span>
                        <button class="quantity-btn add-btn center">+</button>
                    </li>
                }

                )

            }
        </ul>
    )
}

export default Cart

