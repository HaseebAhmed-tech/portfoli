import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";


function Modal({ ModalTrigger, title, ModalContent, enableCancel = true, form }) {
  return (
    <AlertDialog >
      <AlertDialogTrigger asChild>{ModalTrigger}</AlertDialogTrigger>
      <AlertDialogContent className="bg-[#27272c] outline-none border-none max-h-[90vh] overflow-y-auto scroll-">
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
          <AlertDialogAction form={form} type="submit" className="bg-accent text-primary hover:bg-accent-hover">
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default Modal;
