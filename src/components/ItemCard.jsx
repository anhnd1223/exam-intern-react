
const ItemCard = ({ item, onclick }) => {
    return (
        <div className="item-card-container" key={item.id}>
            <img src={item.image} alt={item.name} title={item.name} width={300} height={300} />
            <div className="row-minicontainer" style={{justifyContent:"space-between",alignContent:"center"}}>
                <div className="column-minicontainer">
                    <div className="item-title">{item.name}</div>
                    <div className="item-text">{item.price.toLocaleString()} VND</div>
                </div>
                <div>
                    <button onClick={() => onclick(item.id,1)}> Mua </button>
                </div>
            </div>
        </div>
    )
}
export default ItemCard