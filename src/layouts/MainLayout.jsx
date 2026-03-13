import React from 'react'
import Header from '../components/Header'
import LeftBar from '../components/LeftBar'
import { Outlet, useLocation } from 'react-router'

export default function MainLayout() {
    const location = useLocation()
    console.log();


    return (
        <div onClick={() => {
            window.navigator.geolocation.getCurrentPosition((value) => {
                console.log(value);
            })
        }}>
            <Header />
            <div className='flex '>
                <LeftBar />
                <div className='w-full'>
                    <Outlet context={'askhjdasljdhasljd'} />
                </div>
            </div>

        </div>
    )
}
