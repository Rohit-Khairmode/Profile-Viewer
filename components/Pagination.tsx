import { ArrowLeftIcon, ArrowRight } from "lucide-react";

function Pagination() {
  return (
    <div className="flex justify-start  w-full my-2">
      <div className="flex bg-white items-center justify-between gap-2 border-2 border-tint3 rounded-lg px-3 py-2">
        <button className="px-3 py-2 bg-white hover:bg-primary hover:text-white  text-bold text-md rounded-lg">
          <ArrowLeftIcon size={20} />
        </button>
        <div className="rounded-full border-2 border-primary px-4 py-2 bg-white">
          1
        </div>
        <button className="px-3 py-2 bg-white hover:bg-primary hover:text-white  text-bold text-md rounded-lg">
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
