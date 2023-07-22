import React from "react";
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

// Import the functions you need from the SDKs you need
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAofR0_tQPc2Cvz5JO-DfCY43TKXGRBPbY",
    authDomain: "softeng-mindcheck.firebaseapp.com",
    databaseURL: "https://softeng-mindcheck-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "softeng-mindcheck",
    storageBucket: "softeng-mindcheck.appspot.com",
    messagingSenderId: "540338321211",
    appId: "1:540338321211:web:cb28c9b96be1354c4f691e",
    measurementId: "G-H788E2H82D"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(app);

function signUpWithPassword() {
  const auth = getAuth();
  const database = getDatabase();

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;

  if (document.getElementById("tnc").checked && document.getElementById("pp").checked) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        // Insert user data into the Firebase Realtime Database
        const usersRef = ref(database, "users/" + user.uid);

        set(usersRef, {
          email: email,
          name: name,
          phone: phone,
        })
          .then(() => {
            console.log("Data inserted to Firebase Database");
            alert("You are now Registered! Proceed to Sign In Page");
          })
          .catch((error) => {
            alert("Error with Sign Up!");
            console.log("Error inserting data to Firebase Database:", error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        console.log(errorCode, errorMessage);
      });
  }
}

function signInWithPassword() {
  const auth = getAuth();
  const email = document.getElementById("email-in").value;
  const password = document.getElementById("password-in").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert("Signed in successfully!");
      console.log("Signed in:", user);

      // Redirect the user to the desired page
      window.location.href = "/dsm-5-tr/test"; // Replace "/dsm-5-tr/test" with your desired route

      // You can also use react-router-dom's useHistory hook for routing instead of window.location.href.
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      console.log(errorCode, errorMessage);
    });
}

// SignIn
export const ModalSignIn = ({ modalType, handleSwitch }) => {
  const [open, setOpen] = React.useState(false);
  // For exiting modal
  const handleOpen = () => setOpen((cur) => !cur);
 
  return (
    <React.Fragment>
      <BlueBtn func={handleOpen} text='Take the Test'></BlueBtn>
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
              <Input id="email-in" label="Email" size="medium" className="sm:ml-0 w-[85%] sm:w-full" />
              <Input id="password-in" label="Password" size="medium" className="sm:ml-0 w-[85%] sm:w-full" />
              <div className="-ml-2.5">
                <Checkbox label="Remember Me" />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" color="indigo" onClick={signInWithPassword} fullWidth>
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
              <Input id="phone" type="tel" label="Phone Number" size="medium" pattern="^09\d{9}$" required className="sm:ml-0 w-[85%] sm:w-full" />
              <Input id="password" type="password" label="Password" size="medium" required className="sm:ml-0 w-[85%] sm:w-full" />
              <div className="-ml-2.5">
                <Checkbox id="pp" color="indigo" label={
                  <Typography color="blue-gray" className="text-xs sm:text-sm flex">I've read the
                    <Typography as="a" href="#" color="indigo" className="text-xs sm:text-sm hover:text-indigo-300 transition-colors">
                      &nbsp;Privacy Policy
                    </Typography>.
                  </Typography>
                } />
                <Checkbox id="tnc" color="indigo" label={
                  <Typography color="blue-gray" className="text-xs sm:text-sm flex">I agree with the
                    <Typography as="a" href="#" color="indigo" className="text-xs sm:text-sm hover:text-indigo-300 transition-colors">
                      &nbsp;Terms and Conditions
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