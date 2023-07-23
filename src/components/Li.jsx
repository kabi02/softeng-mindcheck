import {Link, useLocation} from 'react-router-dom'

// Used for the each links in Header.jsx
export default function Li({text, link}) {
    // Get the current URL
    const location = useLocation();

    // Compare the current URL with the link prop
    const isActive = location.pathname === link;

    return(
        <li className='hover:scale-110 transition-transform duration-2000 cursor-pointer 
         sm:text-base text-sm
         rounded-md max-lg:hover:bg-white max-lg:hover:text-blue-500'>
            {/* Conditionally apply the font-bold class */}
            <Link to={link} className={isActive ? 'font-bold' : ''}>
                {text}
            </Link>
            
        </li>
    )
}
