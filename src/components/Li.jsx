import {Link} from 'react-router-dom'

export default function Li({text, link}) {
    return(
        <li className='max-lg:w-[480px] cursor-pointer max-lg:mt-5 max-lg:p-2 rounded-md max-lg:hover:bg-white max-lg:hover:text-blue-500 max-lg:hover:font-bold'>
            <Link to={link}>
                {text}
            </Link>
            
        </li>
    )
}