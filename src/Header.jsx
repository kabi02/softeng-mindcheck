// For Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom' // Act as <a href>
import img from './assets/logo.png'
import Li from './components/Li';

export default function Header() {
    return(
        <div className="flex lg:flex-row flex-col lg:py-4 xl:px-16 px-0 justify-between">
            <div className=" flex justify-between lg:w-auto w-[90%] lg:m-9 mx-9 my-5 items-center">
                <Link to='/'><img src={img} alt="" /></Link>
                {/* <!-- Hamburger Icon --> */}
                <div className="lg:hidden">
                    <button className="navbar-burger flex items-center text-black p-3">
                        <FontAwesomeIcon icon={faBars} className='sm:text-3xl text-xl text-white pr-9'/>
                    </button>
                </div>
            </div>
            <div className="w-full order-2 text-lg flex lg:flex-row flex-col justify-between xl:justify-center items-center text-center 2xl:gap-16 gap-7 lg:px-9 mx-auto">
                <ul className="flex lg:flex-row flex-col font-open-sans xl:gap-16 lg:gap-7 gap-1 text-white">
                    <Li text='Scoring Guide' link='/scoring-guide'/>
                    <Li text='Specialized Tests' link='/specialized-tests'/>
                    <Li text='About Us' link='/about-us'/>
                    <Li text='Resources' link='/resources'/>
                </ul>
                <div className="order-2 max-lg:mb-10">
                    <button type="button" className="py-3 px-7 rounded-full bg-white font-open-sans font-bold">Take the Test</button>
                </div>
            </div>
        </div>
    )
}