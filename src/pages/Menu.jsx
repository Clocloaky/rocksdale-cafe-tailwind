import React, { useState } from 'react'
import items from '../data/menu.json'
import Selection from '../components/Selection'
import MenuList from '../components/MenuList'

const Menu = () => {
  const getAllCategories = ["All", ...new Set(items.map((item) => item.type))]

  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("All");
  const [categories, SetCategories] = useState(getAllCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === 'All') return setMenuItems(items)
    else {
      const newItems = items.filter((item) => item.type === category)
      setMenuItems(newItems)
    }
  }
  return (
    <div className='md:mb-[100px] md:pt-[400px] md:px-20 lg:px-40'>
      <Selection categories={categories} activeCategory={activeCategory} filterItems={filterItems} />
      <MenuList items={menuItems}/>
    </div>
  )
}

export default Menu