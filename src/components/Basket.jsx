import React from 'react'
import { PlusIcon, MinusIcon } from '@heroicons/react/solid';

const Basket = (props) => {
    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const taxPrice = itemsPrice * 0.14; //can change
    const shippingPrice = itemsPrice > 300 ? 0 : 50;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return (
        <aside className='p-5 border shadow-lg'>
            <h2 className='font-bold text-center text-xl pb-7'>Cart Items</h2>
            <div className='text-center'>{cartItems.length === 0 && <div>Cart is Empty</div>}</div>
            {cartItems.map((item) => (
                <div key={item.id} className="flex gap-2">
                    <div className='font-bold'>{item.name}</div>
                    <div>
                        {item.qty} x ${item.price.toFixed(2)}
                    </div>
                    <div>
                        <button className="bg-gray-200 rounded font-bold border border-black"
                            onClick={() => onAdd(item)}>
                            <PlusIcon className='w-5' />
                        </button>
                        <button className="bg-gray-200 rounded font-bold border border-black"
                            onClick={() => onRemove(item)}>
                            <MinusIcon className='w-5' />
                        </button>
                    </div>

                </div>
            ))}
            {cartItems.length !== 0 && (
                <div>
                    <hr></hr>
                    <div>
                        <div className='font-light text-sm'>Items Price</div>
                        <div>${itemsPrice.toFixed(2)}</div>
                    </div>
                    <div>
                        <div className='font-light text-sm'>Tax Price</div>
                        <div>${taxPrice.toFixed(2)}</div>
                    </div>
                    <div>
                        <div className='font-light text-sm'>Shipping Price</div>
                        <div>${shippingPrice.toFixed(2)}</div>
                    </div>
                    <div>
                        <div className='font-bold'>Total Price</div>
                        <div>${totalPrice.toFixed(2)}</div>
                    </div>
                </div>
            )}
        </aside>
    )
}

export default Basket;