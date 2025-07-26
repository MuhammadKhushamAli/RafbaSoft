import { Link, NavLink } from 'react-router';

export default function Header() {
    return (
        <nav className='flex flex-row h-[10vh] justify-between w-full'>
            <Link
                to='/'
                className='w-[20%]'
            >
                <img src="\src\assets\Main_Logo.jpg"
                    alt="RafbaSoft_Logo"
                    className='w-[50%]' />
            </Link>

            <ul
            className='flex flex-row w-[80%] justify-evenly items-center h-full'>
                <li className='w-[20%] h-full flex flex-row items-center justify-center'><NavLink to='/'>Home</NavLink></li>
                <li className='w-[20%] h-full flex flex-row items-center justify-center'><NavLink to='Services'>Services</NavLink></li>
                <li className='w-[20%] h-full flex flex-row items-center justify-center'><NavLink to='About-Us'>About Us</NavLink></li>
                <li className='w-[20%] h-full flex flex-row items-center justify-center'><NavLink to='Contact-Us'>Contact Us</NavLink></li>
            </ul>
        </nav>
    )
}