import React from 'react'
import data from '../data/products.json'

const Featured = () => {
    const products = data;
    const featuredImg = products.find((item) => item.featured === true);
    const elements = featuredImg.genre;
    return (
        <>
            <div className='font-bold'>New in the shop!</div>
            <div className='pt-5 gap-5'>
                <img className='aspect-square w-[300px] pb-5'
                    src={featuredImg.image}
                    alt="featured image of boardgame" />
                <div>
                    <h2 className='font-bold'>{featuredImg.name}</h2>
                    <p>Price: ${featuredImg.price}</p>
                    <p>{elements.join(", ")}</p>
                    <p>{featuredImg.desc}</p>
                </div>
            </div>
        </>
    )
}

export default Featured