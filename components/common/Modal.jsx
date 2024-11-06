import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function Modal({ ModalTrigger, title, ModalContent, enableCancel = true }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{ModalTrigger}</AlertDialogTrigger>
      <AlertDialogContent className="bg-[#27272c] outline-none border-none">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-foreground">
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-foreground">
            {ModalContent}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {enableCancel && (
            <AlertDialogCancel className="bg-transparent border border-accent hover:bg-accent-hover ">
              Cancel
            </AlertDialogCancel>
          )}
          <AlertDialogAction className="bg-accent text-primary hover:bg-accent-hover">
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default Modal;
