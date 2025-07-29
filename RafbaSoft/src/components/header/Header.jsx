import { Link, NavLink } from 'react-router';
import NavLogo from '/assets/Main.png';

export default function Header() {
    return (
        <nav className='flex
        flex-row
        h-[10vh]
        justify-evenly
        w-full
        top-0
        box-border'>
            <Link
                to='/'
                className='w-[20%]'
            >
                <img src={NavLogo}
                    alt="RafbaSoft_Logo"
                    className='w-[90px]' />
            </Link>

            <ul
            className='flex flex-row w-[70%] justify-evenly max-sm:justify-between items-center h-full'>
                <li className='w-[20%] h-full'><NavLink to='/'
                className={({isActive}) => `${isActive ? 'text-red-600 border-b-3 border-b-red-600' : 'text-black'} w-full h-full flex flex-row justify-center items-center`}>Home</NavLink></li>
                <li className='w-[20%] h-full'><NavLink to='Services'
                className={({isActive}) => `${isActive ? 'text-red-600 border-b-3 border-b-red-600' : 'text-black'} w-full h-full flex flex-row justify-center items-center`}>Services</NavLink></li>
                <li className='w-[20%] h-full'><NavLink to='About-Us'
                className={({isActive}) => `${isActive ? 'text-red-600 border-b-3 border-b-red-600' : 'text-black'} w-full h-full flex flex-row justify-center items-center`}>About Us</NavLink></li>
                <li className='w-[20%] h-full'><NavLink to='Contact-Us'
                className={({isActive}) => `${isActive ? 'text-red-600 border-b-3 border-b-red-600' : 'text-black'} w-full h-full flex flex-row justify-center items-center`}>Contact Us</NavLink></li>
            </ul>
        </nav>
    )
}