import React, {useRef, useEffect} from "react"
import {NavLink} from 'react-router-dom'
import "./Header.css"
import {motion} from "framer-motion"
import logo from "../../assets/image-2/logo-gloria-2 (1).png"
import userIcon from "../../assets/images/user-icon.png"
import {Container, Row} from "reactstrap"

const nav__links = [
    {
        path:'home',
        display:'Home'
    },
    {
        path:'shop',
        display:'shop'
    },
    {
        path:'cart',
        display:'Cart'
    },
]

const Header =()=>{

  const headerRef = useRef(null)

  const menuRef = useRef(null)

  const stickyHeaderFunc = ()=>{
    window.addEventListener('scroll', ()=> {
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
            headerRef.current.classList.add('sticky__header')
        } else{
            headerRef.current.classList.remove('sticky__header') 
        }
    })
  }

  useEffect (()=>{
    stickyHeaderFunc()

    return () => window.removeEventListener('scroll', stickyHeaderFunc)
  })

   const menuToggle = () => menuRef.current.classList.toggle('active__menu')


        return (

        <header className="header" ref={headerRef}>
            <Container>
                <Row>
                    <div className="nav__wrapper">
                        <div className="logo">
                            <img src={logo} alt="logo-gloria" />
                            <div>
                                
                            </div>
                        </div>
                        
                        <div className="navigation" ref={menuRef} onClick={menuToggle}>
                            
                            <ul className="menu">
                                {nav__links.map((item,index)=>(
                                    <li className="nav__item" key={index}>
                                    <NavLink to={item.path} className={(navClass)=>
                                        navClass.isActive ? 'nav__active': ''}>{item.display}</NavLink>
                                </li>
                                ))
                                    
                                }
                            </ul>
                            
                            
                        </div>

                        <div className="nav__icons">
                            <span className="fav__icon">
                            <i class="ri-heart-line"></i>
                            <span className="badge">1</span>
                            </span>
                            
                            <span className="cart__icons">
                            <i class="ri-shopping-bag-line"></i>
                            <span className="badge">1</span>
                            </span>
                            

                            <span >
                                <motion.img whileTap={{scale:1.2}} src={userIcon} alt="" />
                            </span>

                            <div className="mobile__menu">
                            <span onClick={menuToggle}>
                                <i class="ri-menu-fill"></i>
                            </span>
                        </div>
                        </div>
        
                    </div>
                </Row>
            </Container>
        </header>
)
}

export default Header;