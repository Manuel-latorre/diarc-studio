import {  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import { Form } from "./Form";

const ModalForm = ({text}:any) => {
  return (
    <Dialog>
      <DialogTrigger>
        <button className="border rounded-full py-1 px-3 hover:opacity-70 transition-all border-white">
          {text}
        </button>
      </DialogTrigger>
      <DialogContent className="bg-[#2e2e2e] rounded-xl">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription>
            <Form/>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ModalForm;
