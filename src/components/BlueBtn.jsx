import {Link} from 'react-router-dom'

export default function BlueBtn({
    text, link, func,
    style = 'hover:bg-[#4a7ae6] rounded-full bg-blue-500 font-bold py-3 px-7 '
}) {
    return(
        <Link to={link} onClick={func}>
            <button 
            type="button" 

            className={`font-open-sans text-white hover:shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:font-bold ${style}`}>
                {text} 
            </button>
        </Link>
    )
}