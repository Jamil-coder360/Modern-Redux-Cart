import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  const menuItem = [
    {
      id:1,
      text: "home",
      link : "/"
    },
    {
      id:2,
      text: "about",
      link : "/about"
    },
    {
      id:3,
      text: "contact",
      link : "/contact"
    },
    {
      id:4,
      text: "product",
      link : "/product"
    },
  ]
  return (
   <header>
      <nav className='flex items-center justify-between bg-liniear py-8 px-5 shadow-xl'>
        <div>
          <img src="/public/Exclusive.svg" alt="logo" />
        </div>

        <ul className='flex items-center justify-between gap-6'>
       {menuItem.map((item)=>{
       return(

        <li key={item.id}>
          <Link to={item.link} className='text-xl text-black font-semibold'>
          {item.text}
          </Link>
        </li>
       )
       })

       }
        </ul>
      </nav>
   </header>
  )
}

export default Header