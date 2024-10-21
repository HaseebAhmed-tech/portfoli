import { Button } from "@/components/ui/button";

function SubmitButton() {
  return (
    <Button
      variant="secondary"
      type="submit"
      // disabled={pending}
      size="lg"
      className="max-w-32"
    >
      Sign up
    </Button>
  );
}

export default SubmitButton;
