import { useAuth } from "@/context/auth";
import { useDeferredValue, useState } from "react";
import ProfileCards from "../ProfileCards";
import { useModal } from "@/context/modal";

function ProductList() {
  const { isAdmin } = useAuth();
  const [search, setSearch] = useState("");
  const defferedSearch = useDeferredValue(search);
  const { isOpen, setIsOpen, setProfileId, setType } = useModal();

  return (
    <>
      <div className="flex py-4 items-center justify-between">
        {isAdmin ? (
          <button
            className="px-4 py-2 text-center rounded-lg bg-primary text-white font-bold text-lg hover:bg-shade1"
            onClick={() => {
              setIsOpen(true);
              setProfileId(-1);
              setType("edit");
            }}
          >
            Add user
          </button>
        ) : (
          <h3 className="uppercase font-bold text-shade2 text-2xl">Profiles</h3>
        )}
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="px-6 py-2 w-1/3 border-2  border-primary focus:outline  focus:outline-shade1 rounded-full"
          placeholder="Search..."
        />
      </div>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4 md:gap-3 lg:gap-4">
        <ProfileCards search={defferedSearch} />
      </div>
    </>
  );
}

export default ProductList;
