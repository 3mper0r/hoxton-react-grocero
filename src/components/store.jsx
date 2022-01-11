function Store(props) {
    return (

        <ul class="item-list store--item-list">
            {
                props.store.map((item) => {
                    return <li>
                        <div class="store--item-icon">
                            <img src={`./assets/icons/${item.id}-${item.name}.svg`} alt={item.name} />
                        </div>
                        <button
                            onClick={ }

                        >Add to cart</button>
                    </li>
                })
            }
        </ul >
    )
}

export default Store
