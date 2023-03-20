import React, {  useState } from 'react'
import {  Link, NavLink } from 'react-router-dom'
import data from '../pages/pages.json'
import '../../Styles/header.css'
import { useSelector } from 'react-redux'
const Header = () => {
  const activeStyle = {
    color: "red",
  };

  const defaultStyle = {
    color: "black",
  };

const [value,setValue] = useState(false)
const [show, setShow] = useState()

  const getMenu = () => {
    setValue(!value)
    setShow(value ? 'fa-solid fa-bars' : 'fa-solid fa-xmark')
  }
const products = useSelector(state => state.product.products)

const scrollTop = () => {
  window.scrollTo({
    top: 0,
    right: 0,
    behavior: 'smooth'
  })
}

const [scroll,setScroll] = useState('d-none')

window.addEventListener('scroll', function(){
  let scrollHeight = window.scrollY
  if(scrollHeight > 100){
    setScroll('d-block')
  }else{
    setScroll('d-none')

  }
})
  return (
<>

<div className='p-5 d-flex  bg-white  justify-content-evenly align-items-center'>
  <div className="logo">
    SHOP STORE
  </div>
     <div className='navbar1'>
     <nav >
        <ul className='nav '>
          {data.menu.map(item => {
            return <li className='nav-item'><NavLink style={({ isActive }) =>
            isActive ? activeStyle : defaultStyle
          } className='nav-link' to={item.path}>{item.link}</NavLink></li>
          })}

        </ul>
      </nav>
     </div>
    <div className='d-flex'>
   <Link to={'/cart'}> <i  className="fa-solid fa-store store text-black fs-5"><span className='text-danger'>{products.length}</span></i> </Link>
    </div>
     <div><i onClick={getMenu} className={`fa-solid fa-bars bars-icon ${show}`}></i></div>
    </div>

    <div className={`navbar2 bg-dark ${!value ? 'd-none' : 'd-block'}`}>
     <nav >
        <ul className='nav'>
          {data.menu.map(item => {
            return <li className='nav-item'><NavLink style={({ isActive }) =>
            isActive ? activeStyle : defaultStyle
          } className='nav-link' to={item.path}>{item.link}</NavLink></li>
            
          })}

        </ul>
      </nav>
     </div>
   <div onClick={scrollTop} className={`${scroll} scroll-top-btn`}>
      <span ><i className="fa-solid fa-arrow-up"></i></span>
    </div> 
</>
  )
}

export default Header
