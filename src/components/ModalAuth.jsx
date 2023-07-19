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
              <Input label="Email" size="medium" className="sm:ml-0 w-[85%] sm:w-full" />
              <Input label="Password" size="medium" className="sm:ml-0 w-[85%] sm:w-full" />
              <div className="-ml-2.5">
                <Checkbox label="Remember Me" />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" color="indigo" onClick={handleOpen} fullWidth>
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
              <Input label="Email" size="medium" className="sm:ml-0 w-[85%] sm:w-full"/>
              <Input label="Name" size="medium" className="sm:ml-0 w-[85%] sm:w-full" />
              <Input label="Phone Number" size="medium" className="sm:ml-0 w-[85%] sm:w-full" />
              <Input label="Password" size="medium" className="sm:ml-0 w-[85%] sm:w-full" />
              <div className="-ml-2.5">
                <Checkbox color="indigo" label={
                  <Typography color="blue-gray" className="text-xs sm:text-sm flex">I've read the
                    <Typography as="a" href="#" color="indigo" className="text-xs sm:text-sm hover:text-indigo-300 transition-colors">
                      &nbsp;Privacy Policy
                    </Typography>.
                  </Typography>
                } />
                <Checkbox color="indigo" label={
                  <Typography color="blue-gray" className="text-xs sm:text-sm flex">I agree with the
                    <Typography as="a" href="#" color="indigo" className="text-xs sm:text-sm hover:text-indigo-300 transition-colors">
                      &nbsp;Terms and Conditions
                    </Typography>.
                  </Typography>
                } />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" color="indigo" onClick={handleOpen} fullWidth>
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

// SignUp
// export const ModalSignUp = () => {
//   const [open, setOpen] = React.useState(false);
//   // For exiting modal
//   const handleOpen = () => setOpen((cur) => !cur);
 
//   return (
//     <React.Fragment>
//       <BlueBtn func={handleOpen} text='Take the Test'></BlueBtn>
//       <Dialog
//         size="xs"
//         open={open}
//         handler={handleOpen}
//         className="bg-transparent shadow-none"
//       >
//         <Card className="mx-auto w-full max-w-[24rem]">
//           <CardHeader
//             variant="gradient"
//             color="indigo"
//             className="mb-4 grid h-28 place-items-center"
//           >
//             <Typography variant="h3" color="white">
//               Sign Up
//             </Typography>
//           </CardHeader>
//           <CardBody className="flex flex-col gap-4">
//             <Input label="Email" size="medium" className="sm:ml-0 w-[85%] sm:w-full"/>
//             <Input label="Name" size="medium" className="sm:ml-0 w-[85%] sm:w-full" />
//             <Input label="Phone Number" size="medium" className="sm:ml-0 w-[85%] sm:w-full" />
//             <Input label="Password" size="medium" className="sm:ml-0 w-[85%] sm:w-full" />
//             <div className="-ml-2.5">
//               <Checkbox color="indigo" label={
//                 <Typography color="blue-gray" className="text-xs sm:text-sm flex">I've read the
//                   <Typography as="a" href="#" color="indigo" className="text-xs sm:text-sm hover:text-indigo-300 transition-colors">
//                     &nbsp;Privacy Policy
//                   </Typography>.
//                 </Typography>
//               } />
//               <Checkbox color="indigo" label={
//                 <Typography color="blue-gray" className="text-xs sm:text-sm flex">I agree with the
//                   <Typography as="a" href="#" color="indigo" className="text-xs sm:text-sm hover:text-indigo-300 transition-colors">
//                     &nbsp;Terms and Conditions
//                   </Typography>.
//                 </Typography>
//               } />
//             </div>
//           </CardBody>
//           <CardFooter className="pt-0">
//             <Button variant="gradient" color="indigo" onClick={handleOpen} fullWidth>
//               Sign In
//             </Button>
//             <Typography variant="small" className="text-xs sm:text-sm mt-6 flex justify-center">
//               Already have an account?
//               <Typography
//                 as="a"
//                 href="#signup"
//                 variant="small"
//                 color="indigo"
//                 className="ml-1 font-bold"
//                 onClick={handleOpen}
//               >
//                 Sign Up
//               </Typography>
//             </Typography>
//           </CardFooter>
//         </Card>
//       </Dialog>
//     </React.Fragment>
//   );
// }

export default ModalSignIn;