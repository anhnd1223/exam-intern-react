const CartButton = ({ items }) => {
    return (
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div style={{ position: "relative", marginBottom: "20px" }}>
                <button>
                    Giỏ hàng
                </button>
                <div className='notification'>
                    3
                </div>
                <ul className="dropdown-list">
                    {items.map((item) => (
                        <ItemInCart key={item.id} item={item} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

const ItemInCart = ({ item }) => {
    return (
        <li>
            <div className="row-minicontainer" style={{gap:"10px"}}>
                <img src={item.image} alt={item.name} title={item.name} width={100} height={100} />
                <div className="column-minicontainer">
                    <div className="item-title">{item.name}</div>
                    <div className="item-text">{item.price} VND</div>
                </div>
            </div>
        </li>
    )
}

export default CartButton