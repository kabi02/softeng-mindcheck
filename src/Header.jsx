
import {Link} from 'react-router-dom' // Act as <a href>
import img from './assets/logo.png' // navbar logo
import Li from './components/Li';
import { useState } from "react"; // for the state of hamburger menu
// for the icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  // Added a state variable to toggle the navbar menu
  const [showMenu, setShowMenu] = useState(false);

  // Added a function to handle the click event on the hamburger icon
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex lg:flex-row flex-col xl:px-16 px-0 pb-10 lg:pb-0 justify-between">
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
            {/* Changed the icon depending on the showMenu state */}
            <FontAwesomeIcon
              icon={showMenu ? faTimes : faBars}
              className="sm:text-3xl text-xl text-white"
            />
          </button>
        </div>
      </div>
      {/* Added a conditional rendering for the navbar menu */}
      {showMenu && (
        <div className="w-full order-2 lg:text-lg text-base flex lg:flex-row flex-col justify-between xl:justify-center items-center text-center 2xl:gap-16 gap-5 lg:px-9 mx-auto">
          <ul className="flex lg:flex-row flex-col font-open-sans xl:gap-16 lg:gap-7 gap-2 text-white">
            <Li text="Scoring Guide" link="/scoring-guide" />
            <Li text="Specialized Tests" link="/specialized-tests" />
            <Li text="About Us" link="/about-us" />
            <Li text="Resources" link="/resources" />
          </ul>
          <div className="order-2 max-lg:mb-10">
            <Link to="/what-is-dsm-5-tr">
              <button
                type="button"
                className="py-3 px-7 rounded-full bg-white font-open-sans font-bold hover:bg-gray-200"
              >
                Take the Test
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
