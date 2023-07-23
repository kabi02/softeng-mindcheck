
import {Link, useLocation} from 'react-router-dom'
import img from './assets/logo.png' // navbar logo
import Li from './components/Li';
import { useState, useEffect } from "react";
// for the icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";

// Added a custom hook to get the window width
const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return windowWidth;
};

export default function Header() {
  const breakpoint = 960; // in mobile view if in lg screen size
  const windowWidth = useWindowWidth(); // get window width

  const [showMenu, setShowMenu] = useState(false); // for showing or hiding the navabr

  // when clicking the hamburger menu
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  // get the current location to hide the take the test button in the test page
  const location = useLocation(); 
  const hideButton = location.pathname === "/dsm-5-tr/test"; 

  // always show the navbar when screen size > 960px 
  useEffect(() => {
    if (windowWidth > breakpoint) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }, [windowWidth]);

  // for opening the user icon
  const [showDiv, setShowDiv] = useState(false);
  const toggleDiv = () => {
    setShowDiv(prev => !prev);
  };

  return (
    <div className="flex lg:flex-row flex-col xl:px-16 px-0 justify-between">
      <div className="flex justify-between lg:w-auto w-[90%] lg:m-9 mx-auto my-5 items-center">
        <Link to="/">
          <img src={img} alt="" className="lg:w-full w-10/12" />
        </Link>
        {/* <!-- Hamburger Icon --> */}        
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-black p-3"
            onClick={handleMenuClick}
          >
            {/* X icon if the menu is showing, hamburger menu if the menu is not yet shown */}
            <FontAwesomeIcon
              icon={showMenu ? faTimes : faBars}
              className="sm:text-3xl text-xl text-white"
            />
          </button>          
        </div>        
      </div>
      {/* Show if showMenu is true */}
      {showMenu && (
        <div className="w-full order-2 lg:text-lg text-base flex lg:flex-row flex-col justify-between xl:justify-center items-center text-center 2xl:gap-16 gap-5 lg:px-9 mx-auto">
          <ul className="flex lg:flex-row flex-col font-open-sans xl:gap-16 lg:gap-7 gap-2 text-white">
            <Li text="Scoring Guide" link="/scoring-guide" />
            <Li text="Specialized Tests" link="/specialized-tests" />
            <Li text="About Us" link="/about-us" />
            <Li text="Resources" link="/resources" />
          </ul>
          <div className="order-2 lg:mb-0 mb-10 flex flex-row items-center">
            {/* //user */}
            <FontAwesomeIcon icon={faUser} className="sm:text-3xl text-xl text-white mx-5 mt-1 cursor-pointer" onClick={toggleDiv}/>
            {/* for showing the div if the user is clicked */}
            {showDiv 
            ? 
              <div className="bg-[#9BA0BE] p-4 absolute mt-32 rounded-xl sm:text-base text-sm text-white">
                My Beautiful Name <br/>
                <h2 className='font-bold cursor-pointer'>Logout</h2>
              </div> 
              : 
              null
            }
            {/* // only render the button if hideButton is false */}
            {!hideButton && ( 
            <Link to="/what-is-dsm-5-tr">
              <button
                type="button"
                className={`
                  py-3 px-7 rounded-full bg-white font-open-sans font-bold hover:bg-gray-200
                  
                `}
              >
                Take the Test
              </button>
            </Link>
            )}            
          </div>
        </div>
      )}
    </div>
  );
}

