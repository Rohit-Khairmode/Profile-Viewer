import { useAuth } from "@/context/auth";
import { useDeferredValue, useState } from "react";
import Button, { ButtonTypes } from "../Button";
import ProfileCards from "../ProfileCards";
import Pagination from "../Pagination";

function ProductList() {
  const { isAdmin } = useAuth();
  const [search, setSearch] = useState("");
  const defferedSearch = useDeferredValue(search);
  return (
    <>
      <div className="flex py-4 items-center justify-between">
        {isAdmin ? (
          <Button onClick={() => {}} type={ButtonTypes.Edit}>
            Add User
          </Button>
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
      <Pagination />
    </>
  );
}

export default ProductList;
