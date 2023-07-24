import React, { useState, useContext } from "react";
import BlueBtn from '../components/BlueBtn'
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

import { getAuth, createUserWithEmailAndPassword,  signInWithEmailAndPassword } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Link } from "react-router-dom";
import { getDatabase, ref, push, set, get} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAofR0_tQPc2Cvz5JO-DfCY43TKXGRBPbY",
  authDomain: "softeng-mindcheck.firebaseapp.com",
  projectId: "softeng-mindcheck",
  storageBucket: "softeng-mindcheck.appspot.com",
  messagingSenderId: "540338321211",
  appId: "1:540338321211:web:cb28c9b96be1354c4f691e",
  measurementId: "G-H788E2H82D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

console.log(app);

// SignIn
export const ModalSignIn = ({ modalType, handleSwitch, text, style }) => {
  const [open, setOpen] = React.useState(false);
  // For exiting modal
  const handleOpen = () => setOpen((cur) => !cur);

  function signIn () {
      const auth = getAuth();
      var email = document.getElementById("sign-email").value;
      var password = document.getElementById("sign-password").value;

      if (email && password) {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("teitetetetete");
          alert("Signed in successfully!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
    }
  }

  function signUpWithPassword() {
    const auth = getAuth();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    console.log(email, password);
    if(document.getElementById("tnc").checked && document.getElementById("pp").checked) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("Registered");        
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
              <Link to='/dsm-5-tr/test'>
                <Button variant="gradient" color="indigo" onClick={signIn} fullWidth>
                Sign In
                </Button>
              </Link>
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