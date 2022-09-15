import React from 'react';
import Main from '../components/Main';
import Basket from '../components/Basket';
import data from '../data/products.json';
import { useContext } from 'react';
import { CartContext } from '../components/cartContext';

const Shop = () => {
  const products = data;
  const { cartItems, setCartItems } = useContext(CartContext);
  const onAdd = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) => item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item)
      )
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) => item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item)
      );
    }
  }

  return (
    <div className='grid grid-cols-3 gap-10 md:mb-[100px] md:pt-[450px] md:px-20 lg:px-40'>
      <div className='col-span-2'>
        <Main onAdd={onAdd} products={products} />
      </div>
      <div className='col-span-1'>
        <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
      </div>
    </div>
  )
}

export default Shop;