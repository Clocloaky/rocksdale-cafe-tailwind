import React from 'react'

const Product = (props) => {
    const { product, onAdd } = props;
    return (
        <div>
            <img src={product.image}
                alt=""
                className='aspect-square object-fit rounded-lg'
            />
            <h3 className='font-bold'>{product.name}</h3>
            <div>Price: ${product.price}</div>
            <div>
                <button
                    className='bg-red-700 text-white font-bold py-1 px-2 rounded-lg'
                    onClick={() => onAdd(product)}>
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default Product;
