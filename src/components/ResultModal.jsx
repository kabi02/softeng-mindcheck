import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import ResultSection from '../components/ResultSection'
 
export function ResultModal({user, result}) {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
      <div onClick={handleOpen} className="cursor-pointer text-center">Show</div>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader className="justify-center bg-indigo-500">{user}'s Result</DialogHeader>
        <DialogBody divider className="scrollable-body">

          {/* for multiple ResultSection */}
          {result.map(item => (
            <ResultSection part={item.part} result={item.result} />
          ))}
          
        </DialogBody>
        <DialogFooter>
          <Button variant="gradient" color="indigo" onClick={handleOpen}>
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}