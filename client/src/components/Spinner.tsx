import { Spinner } from "flowbite-react";

function femSpinner() {
  return (
    <div className="flex flex-wrap gap-2">
      <Spinner color="purple" aria-label="Purple spinner example" size={"xl"}/>
    </div>
  );
}

export default femSpinner;