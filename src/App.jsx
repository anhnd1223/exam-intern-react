import './App.css'
import CartButton from './components/CartButton';
import ItemCard from './components/ItemCard';
import { useState } from 'react';
import { useEffect } from 'react';

const products = [
  { id: 1, name: 'Áo thun trắng', price: 150000, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab' },
  { id: 2, name: 'Quần jeans xanh', price: 300000, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d' },
  { id: 3, name: 'Tai nghe không dây', price: 500000, image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df' },
  { id: 4, name: 'Sạc dự phòng', price: 200000, image: 'https://images.unsplash.com/photo-1706275399524-813e89914e43' },
  { id: 5, name: 'Giày thể thao', price: 450000, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff' },
  { id: 6, name: 'Áo khoác', price: 350000, image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3' },
  { id: 7, name: 'Mũ lưỡi trai', price: 100000, image: 'https://images.unsplash.com/photo-1560774358-d727658f457c' },
  { id: 8, name: 'Đồng hồ thể thao', price: 600000, image: 'https://images.unsplash.com/photo-1523475496153-3d6cc0f0bf19' },
  { id: 9, name: 'Ba lô du lịch', price: 400000, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62' },
  { id: 10, name: 'Kính râm thời trang', price: 250000, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f' },
  { id: 11, name: 'Bình nước giữ nhiệt', price: 180000, image: 'https://images.unsplash.com/photo-1648919725390-1eec35fdf32c' },
  { id: 12, name: 'Ốp lưng điện thoại', price: 80000, image: 'https://images.unsplash.com/photo-1593055454503-531d165c2ed8' },
];

function App() {

  const [cart, setCart] = useState([]);
  const updateQuantity = (id, quantityChange) => {
    const product = products.find((p) => p.id === id);
    if (!product) return;

    setCart((prevCart) => {
      const existInCart = prevCart.findIndex((p) => p.id === id)
      if (existInCart!==-1) {
        return prevCart.map((item)=>
          item.id === id?{...item,quantity: item.quantity+1}:item
        );
      } else {
        const newProduct = {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: quantityChange
        }
        return [...prevCart,newProduct]
      }
    });
  }

  return (
    <main>
      <CartButton cart={cart} />
      <div className="container">
        {products.map((item) => (
          <ItemCard key={item.id} item={item} onclick={updateQuantity} />
        ))}
      </div>
    </main>
  )
}

export default App
