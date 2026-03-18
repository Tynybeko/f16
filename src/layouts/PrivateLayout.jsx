import React, { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router'
import API from '../api'
import useProfile from '../lib/zustand/auth'

export default function PrivateLayout() {
    const navigate = useNavigate()
    const [isAuth, setAuth] = useState(false)
    const [loading, setLoading] = useState(true)
    const location = useLocation()
    const profile = useProfile()
    useEffect(() => {
        const token = localStorage.getItem('acc_token')
        if (!token) navigate('/login');
        setLoading(true)
        API.get('auth/me')
            .then(response => {
                setAuth(true)
                profile.setProfile(response.data)
            })
            .catch(err => setAuth(false))
            .finally(() => setLoading(false))
    }, [location.pathname])

    useEffect(() => {
        if (!loading && !isAuth) {
            navigate('/login')
        }
    }, [loading])
    return (
        <>
            {loading && <h1>Loading</h1>}
            <Outlet />
        </>
    )
}
