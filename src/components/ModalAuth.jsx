import React, { useState } from "react";
import BlueBtn from '../components/BlueBtn'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";

// Import Firebase app, analytics, and database from the separate file
import { app, db, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, getUserData, set, ref } from "./firebaseConfig";

console.log(app);

// SignIn
export const ModalSignIn = ({ modalType, handleSwitch, text, style }) => {
  const [open, setOpen] = React.useState(false);
  const navigateTo = useNavigate(); // Get the history object
  const { setUserLoggedIn } = useAuth(); // Get the setUserLoggedIn function from the AuthContext
  // For exiting modal
  const handleOpen = () => setOpen((cur) => !cur);

  function signIn () {
      var email = document.getElementById("sign-email").value;
      var password = document.getElementById("sign-password").value;

      if (email && password) {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          alert("Signed in successfully!");

          // Notify the webpages that the user is logged in
          setUserLoggedIn(user);

          navigateTo('/dsm-5-tr/test');
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        alert(errorMessage);
      });
    }
  }

  function signUpWithPassword() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    console.log(email, password);
    if(document.getElementById("tnc").checked && document.getElementById("pp").checked) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("Registered");  
          // Save additional user info to the Realtime Database
          try {
            const userData = {
              name: name,
              email: email,
              phone: phone,
            };
            await saveUserInfoToDatabase(user.uid, userData);
          } catch (error) {
            console.error("Error saving user info to database:", error);
          }
          
          // Switch to sign in modal
          handleSwitch("signin");
          // Open the modal
          setOpen(true);
          alert("You have registered successfully. Please sign in to continue.");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          alert("Something went wrong. Please try again.");
          // ..
        });
    }
  }

  // Function to save user info to the Realtime Database
  const saveUserInfoToDatabase = async (uid, userData) => {
    try {
      const userRef = ref(db, `users/${uid}`);
      await set(userRef, userData);
      console.log("User info saved to database");
    } catch (error) {
      console.error("Error saving user info to database:", error);
      throw error;
    }
  };

 
  return (
    <React.Fragment>
      <BlueBtn func={handleOpen} text={text} style={style}></BlueBtn>
      {/* Sign In Modal */}
      {
        modalType === "signin" && (
        <Dialog
          size="xs"
          open={open}
          handler={handleOpen}
          className="bg-transparent shadow-none"
        >
          <Card className="mx-auto w-full max-w-[24rem]">
            <CardHeader
              variant="gradient"
              color="indigo"
              className="mb-4 grid h-28 place-items-center"
            >
              <Typography variant="h3" color="white">
                Sign In
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <Input id="sign-email" type="email" label="Email" size="medium" className="sm:ml-0 w-[85%] sm:w-full" />
              <Input id="sign-password" type="password" label="Password" size="medium" className="sm:ml-0 w-[85%] sm:w-full" />
            </CardBody>
            <CardFooter className="pt-0">
                <Button variant="gradient" color="indigo" onClick={signIn} fullWidth>
                Sign In
                </Button>
              <Typography variant="small" className="mt-6 flex justify-center">
                Don&apos;t have an account?
                <Typography
                  as="a"
                  href="#signup"
                  variant="small"
                  color="indigo" 
                  className="ml-1 font-bold"
                  onClick={() => handleSwitch("signup")}
                >
                  Sign up
                </Typography>
              </Typography>
            </CardFooter>
          </Card>
        </Dialog>
      )}

      {/* Sign Up Modal */}
      {
        modalType === "signup" &&(
        <Dialog
          size="xs"
          open={open}
          handler={handleOpen}
          className="bg-transparent shadow-none"
        >
          <Card className="mx-auto w-full max-w-[24rem]">
            <CardHeader
              variant="gradient"
              color="indigo"
              className="mb-4 grid h-28 place-items-center"
            >
              <Typography variant="h3" color="white">
                Sign Up
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <Input id="email" type="text" label="Email" size="medium" required className="sm:ml-0 w-[85%] sm:w-full"/>
              <Input id="name" type="text" label="Name" size="medium" required className="sm:ml-0 w-[85%] sm:w-full" />
              <Input id="phone" type="tel" label="Phone Number" size="medium" required className="sm:ml-0 w-[85%] sm:w-full" />
              <Input id="password" type="password" label="Password" size="medium" required className="sm:ml-0 w-[85%] sm:w-full" />
              <div className="-ml-2.5">
                <Checkbox id="pp" color="indigo" label={
                  <Typography color="blue-gray" className="text-xs sm:text-sm flex">I've read the
                    <Typography color="indigo" className="text-xs sm:text-sm hover:text-indigo-300 transition-colors">
                      <Link to="/data-privacy" target="_blank">&nbsp;Privacy Policy</Link>
                      
                    </Typography>.
                  </Typography>
                } />
                <Checkbox id="tnc" color="indigo" label={
                  <Typography color="blue-gray" className="text-xs sm:text-sm flex">I agree with the
                    <Typography color="indigo" className="text-xs sm:text-sm hover:text-indigo-300 transition-colors">
                      <Link to="/terms-and-conditions" target="_blank">&nbsp;Terms and Conditions</Link>
                    </Typography>.
                  </Typography>
                } />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" color="indigo" onClick={ signUpWithPassword } fullWidth>
                Sign Up
              </Button>
              <Typography variant="small" className="text-xs sm:text-sm mt-6 flex justify-center">
                Already have an account?
                <Typography
                  as="a"
                  href="#signup"
                  variant="small"
                  color="indigo"
                  className="ml-1 font-bold"
                  onClick={() => handleSwitch("signin")} 
                >
                  Sign In
                </Typography>
              </Typography>
            </CardFooter>
          </Card>
        </Dialog>
      )}

    </React.Fragment>
  );
}

export default ModalSignIn;