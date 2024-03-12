import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddGoalForm from "../Forms/AddGoalForm";

const AddCard = () => {
  return (
    <div className="flex items-center justify-center w-96 h-32 bg-white border-2 border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-all duration-300 ease-in-out">
      <div className="flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        <Dialog>
          <DialogTrigger>
            {" "}
            <p className="ml-2 text-gray-400">Add a new immersion plan</p>
          </DialogTrigger>
          <DialogContent>
            <AddGoalForm />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AddCard;
