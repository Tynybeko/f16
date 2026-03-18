import Header from '../components/Header'
import LeftBar from '../components/LeftBar'
import { Outlet } from 'react-router'


export default function MainLayout() {
    return (
        <div>
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
