import React from 'react'
import Product from './Product';

const Main = (props) => {
    const { products, onAdd } = props;
    return (
        <main>
            <h2 className='text-3xl font-bold pb-6'>Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                {products.map((product) => {
                    return (
                        <Product key={product.id} product={product} onAdd={onAdd}></Product>
                    )
                })}
            </div>
        </main>
    )
}

export default Main;