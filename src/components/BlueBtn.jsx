import {Link} from 'react-router-dom'

export default function BlueBtn({text, link}) {
    return(
        <Link to={link}>
            <button type="button" className="py-3 px-7 rounded-full bg-blue-500 font-open-sans font-bold text-white hover:bg-[#4a7ae6]">
                {text} 
            </button>
        </Link>
    )
}