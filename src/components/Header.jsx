import React from 'react'
import { Link, NavLink } from 'react-router'

export default function Header() {
    return (
        <header className='flex gap-2 justify-between py-2 px-2 border-b-2'>
            <h1>Logo</h1>
            <nav className='header-nav flex gap-2'>
                {/* <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link> */}
                <NavLink to="/">Home</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </header>
    )
}
