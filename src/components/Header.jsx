import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router'

export default function Header() {
    const navigate = useNavigate()
    
    return (
        <header className='flex gap-2 justify-between py-2 px-2 border-b-2'>
            <h1>Logo</h1>
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
