
import {Link, useLocation} from 'react-router-dom'
import img from './assets/logo.png' // navbar logo
import Li from './components/Li';
import React, { useState, useEffect } from "react";
import {ModalSignIn} from './components/ModalAuth'
import { useAuth } from "./components/AuthContext";
import { useNavigate } from "react-router-dom";

//firebase imports
import { getUserData } from './components/firebaseConfig';

// for the icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";
import BlueBtn from './components/BlueBtn';

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
  // define a state variable for modal type
  const [modalTypeIn, setModalTypeIn] = useState("signin");
  const [modalTypeUp, setModalTypeUp] = useState("signup");

  // define a function that changes the modal type
  function handleSwitchIn(type) {
    setModalTypeIn(type);
  }
  function handleSwitchUp(type) {
    setModalTypeUp(type);
  }

  // Get the user state from the AuthContext
  const { user, logout } = useAuth();
  const navigateTo = useNavigate();


  const [userName, setUserName] = useState(null);

  // Function to fetch and set the user's name based on UID
  const fetchUserName = async () => {
    if (user) {
      const userData = await getUserData(user.uid);
      if (userData && userData.name) {
        setUserName(userData.name);
      }
    }
  };

  useEffect(() => {
    fetchUserName(); // Fetch the user's name when the component mounts and whenever the user changes
  }, [user]);

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
  const hideButton1 = location.pathname === "/dashboard"; 
  const hideButton2 = location.pathname === "/dsm-5-tr/test/result"; 

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
      {/* Show the navlinks if showMenu is true */}
      {showMenu && (
        <div className="w-full order-2 lg:text-lg text-base flex lg:flex-row flex-col justify-between xl:justify-center items-center text-center 2xl:gap-16 gap-5 lg:px-9 mx-auto">
          {/* dont show to admin user */}
          {
            !hideButton1 && (
              <ul className="flex lg:flex-row flex-col font-open-sans xl:gap-16 lg:gap-7 gap-2 text-white">
                <Li text="Scoring Guide" link="/scoring-guide" />
                <Li text="Specialized Tests" link="/specialized-tests" />
                <Li text="About Us" link="/about-us" />
                <Li text="Resources" link="/resources" />
              </ul>
            )
          }
          <div className="order-2 lg:mb-0 flex lg:flex-row flex-col items-center">
            {/* USER */}
            <FontAwesomeIcon icon={faUser} className="sm:text-3xl text-xl text-white mx-5 mt-1 lg:mb-0 mb-4 cursor-pointer lg:block hidden" onClick={toggleDiv}/>
            {/* for showing the div if the user is clicked or screen is smaller than breakpoint*/}
            {showDiv || windowWidth < breakpoint 
            ? 
              <div className="p-4 rounded-xl sm:text-base text-sm text-white -mt-7
                lg:absolute lg:mt-48 lg:mb-0 lg:bg-[#9BA0BE]">
                <div className='h-[0.04rem] rounded-2xl my-4 w-full bg-white lg:hidden'></div>
                <b className='text-lg my-2'>Account</b><br/>
                <div className='h-[0.04rem] rounded-2xl my-3 w-full bg-white lg:block hidden'></div>

                {/* Show the div only if the user is logged in */}
                {user && ( // <-- Check if the user is logged in
                  <div id="name-logout-div">
                    <p className="my-2">{userName}</p>
                    <h2 className="font-bold cursor-pointer" onClick={() => {
                    logout(); // Logout function with alert inside AuthContext
                    navigateTo("/"); // Redirect to the path "/"
                  }}>Logout</h2>
                  </div> 
                )}

                {/* Show the div only if the user is not logged in */}
                {!user && ( // <-- Check if no user is logged in
                  <div id="sign-inup-div" className="flex flex-col">
                    <ModalSignIn
                      modalType={modalTypeIn}
                      handleSwitch={handleSwitchIn}
                      text="Sign In"
                      style="my-2 mx-7"
                    />
                    <ModalSignIn
                      modalType={modalTypeUp}
                      handleSwitch={handleSwitchUp}
                      text="Sign Up"
                      style="my-2 mx-7"
                    />
                  </div>
                )}


              </div> 
              : 
              null
            }
            {/* only show the button if hideButton is false */}
            {!hideButton && !hideButton1 &&  !hideButton2 && ( 
            <Link to={user ? "/what-is-dsm-5-tr/disclaimer" : "/what-is-dsm-5-tr"}>
              <button
                type="button"
                className='py-3 px-7 rounded-full bg-white font-open-sans font-bold hover:bg-gray-200 mb-10 lg:mb-0'   
              >
                {user ? "Go to Test" : "Take the Test"}
              </button>
            </Link>
            )}            
          </div>
        </div>
      )}
    </div>
  );
}

