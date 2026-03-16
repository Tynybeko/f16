import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router'
import { CartContext } from '../App'
import { useSelector } from 'react-redux'
export default function Header() {
    const navigate = useNavigate()
    const [state, setState] = useContext(CartContext)
    console.log('HEADER RENDER');

    return (
        <header className='flex gap-2 justify-between py-2 px-2 border-b-2'>
            <h1>Logo</h1>
            <button onClick={() => setState(prev => prev + 1)}>asdasd</button>
            <div>
                <button onClick={() => navigate(-1)}>PREV</button>
                <button onClick={() => navigate(1)}>NEXT</button>
            </div>
            <nav className='header-nav flex gap-2'>
                {/* <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link> */}
                <NavLink to="/">Home</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </header>
    )
}
