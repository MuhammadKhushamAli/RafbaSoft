import { Header, Footer } from './components'
import { Outlet } from 'react-router'

export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}