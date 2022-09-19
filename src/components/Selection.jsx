import React from 'react'

const Selection = ({ categories, filterItems, activeCategory }) => {
    return (

        <div className='text-center pt-10'>
            {
                categories.map((category, index) => {
                    return(
                        <button
                            type="button"
                            className={ `${activeCategory === category ? "border-b-4 border-red-500 m-5" : "filter-btn m-5"}`}
                            key={index}
                            onClick={() => filterItems(category)}
                        >
                            {category}

                        </button>
                    )
                })
            }
        </div>
    )
}

export default Selection