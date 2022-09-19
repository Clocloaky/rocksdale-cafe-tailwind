import React from 'react'

const MenuList = ({ items }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            {items.map((item) => {
                const { id, name, price, img, desc } = item;
                return (
                    <div key={id} className="grid border-b rounded-md md:text-ellipsis overflow-hidden md:max-h-[200px] md:grid-cols-3 md:border-none md:shadow-lg">
                        <img className="aspect-square object-cover hidden h-full md:col-span-1 md:block md:pr-3" src={img} alt={name} />
                        <div className='p-5 md:col-span-2 md:px-5'>
                            <h2 className='text-red-500 font-bold'>{name}</h2>
                            <h3 className='pb-2'>${price}</h3>
                            <p className='text-sm'>{desc}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default MenuList