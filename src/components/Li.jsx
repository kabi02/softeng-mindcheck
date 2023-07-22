import {Link} from 'react-router-dom'

// Used for the each links in Header.jsx
export default function Li({text, link}) {
    return(
        <li className='hover:scale-110 transition-transform duration-2000 cursor-pointer 
         sm:text-base text-sm
         rounded-md max-lg:hover:bg-white max-lg:hover:text-blue-500 max-lg:hover:font-bold'>
            <Link to={link}>
                {text}
            </Link>
            
        </li>
    )
}