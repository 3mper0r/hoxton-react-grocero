import items from "./store-items"


function Store() {
    return (

        <ul class="item-list store--item-list">
            <li>
                <div class="store--item-icon">
                    <img src={`./assets/icons/${items.id}-${items.name}.svg alt=${items.name}`} />
                </div>
                <button>Add to cart</button>
            </li>
        </ul>
    )
}

export default Store
