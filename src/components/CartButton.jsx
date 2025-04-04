import { useEffect, useState } from "react"

const CartButton = ({ cart }) => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownVisible((prevState) => {
            return !prevState;
        });
      };

    return (
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div style={{ position: "relative", marginBottom: "20px" }}>
                <button onClick={toggleDropdown}>
                    Giỏ hàng
                </button>
                <Notification cart={cart}/>
                {cart && isDropdownVisible && (
                    <ul className="dropdown-list">
                        {cart.map((cartItem) => (
                            <ItemInCart key={cartItem.id} item={cartItem} />
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

const Notification = ({ cart }) => {
    const totalQuantity = cart.reduce((total, product) => total + product.quantity, 0);
  
    if (totalQuantity === 0) {
      return null;
    }
  
    return (
      <div className='notification'>
        {totalQuantity}
      </div>
    );
  };

const ItemInCart = ({ item }) => {
    return (
        <li>
            <div className="row-minicontainer" style={{ gap: "10px" }}>
                <img src={item.image} alt={item.name} title={item.name} width={100} height={100} />
                <div className="column-minicontainer">
                    <div className="item-title">{item.name}</div>
                    <div className="item-text"> Thành tiền: {item.price.toLocaleString()} x {item.quantity} = {(item.price*item.quantity).toLocaleString()} VND</div>
                </div>
            </div>
        </li>
    )
}

export default CartButton