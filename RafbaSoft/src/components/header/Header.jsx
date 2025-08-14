import { Link, NavLink } from 'react-router';
import NavLogo from '/assets/Main.png';

const navItems = [
    {
        title: 'Home',
        to: '/'
    },

    {
        title: 'Services',
        to: 'Services'
    },

    {
        title: 'About Us',
        to: 'About-Us'
    },

    {
        title: 'Contact Us',
        to: 'Contact-Us'
    }
];

export default function Header() {
    return (
        <nav className='flex
        flex-row
        h-[10vh]
        justify-evenly
        items-center
        w-[90%]
        max-sm:w-full
        border-1
        rounded-2xl
        border-black
        m-auto
        top-5
        box-border
        sticky
        z-50
        bg-white'>
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
                {
                    navItems.map(item => (
                        <li
                        key={item.title} 
                        className='w-[20%] h-full'>
                            <NavLink to={item.to}
                                className={({ isActive }) => `${isActive ? `text-red-600
                            border-b-3
                            transition-colors
                            hover:border-b-red-600
                            duration-500`
                                    :
                                    `text-black
                            border-white
                            border-2`}
                            w-full
                            h-full
                            flex
                            flex-row
                            justify-center
                            items-center
                            text-center
                            font-[Roboto]`}>
                                {item.title}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}