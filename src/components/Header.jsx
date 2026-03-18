import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router'
import { CartContext } from '../App'
import { useSelector } from 'react-redux'
import useProfile from '../lib/zustand/auth'
export default function Header() {
    const navigate = useNavigate()
    const profile = useProfile()

    const logout = () => {
        profile.logout()
        navigate('/login')
        localStorage.removeItem('acc_token')
        localStorage.removeItem('ref_token')
    }
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
            {
                profile?.data && <div className='w-10 h-10 rounded-full overflow-hidden'>
                    <img className='w-full' src={profile?.data.image} alt="" />

                </div>
            }
            {
                profile?.data &&
                <button onClick={logout}>EXit</button>
            } 

        </header>
    )
}
