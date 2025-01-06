import Modal from "@/components/common/Modal";
import { Button } from "@/components/ui/button";
import React from "react";

const SectionWithModal = ({ title, form, ModalContent, userId }) => {
    return (
      <div className="flex items-center justify-between py-4 border-b border-slate-800">
        <h1 className="text-lg">{title}</h1>
        <Modal
          ModalTrigger={
            <Button variant="simple" size="sm">
              Edit
            </Button>
          }
          title={title}
          form={form}
          ModalContent={React.cloneElement(ModalContent, { userId })}
        />
      </div>
    );
  };
  
  export default SectionWithModal;