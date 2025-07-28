import { Link, NavLink } from 'react-router';
import NavLogo from '/assets/Main.png';

export default function Header() {
    return (
        <nav className='flex
        flex-row
        h-[10vh]
        justify-between
        w-full
        max-sm:flex-col
        max-sm:h-screen
        max-sm:w-[10vw]
        max-sm:fixed
        top-0'>
            <Link
                to='/'
                className='w-[20%]'
            >
                <img src={NavLogo}
                    alt="RafbaSoft_Logo"
                    className='w-[90px]' />
            </Link>

            <ul
            className='flex flex-row w-[80%] justify-evenly items-center h-full max-sm:flex-col'>
                <li className='w-[20%] h-full flex flex-row items-center justify-center'><NavLink to='/'>Home</NavLink></li>
                <li className='w-[20%] h-full flex flex-row items-center justify-center'><NavLink to='Services'>Services</NavLink></li>
                <li className='w-[20%] h-full flex flex-row items-center justify-center'><NavLink to='About-Us'>About Us</NavLink></li>
                <li className='w-[20%] h-full flex flex-row items-center justify-center'><NavLink to='Contact-Us'>Contact Us</NavLink></li>
            </ul>
        </nav>
    )
}