import { useAuth } from "@/context/auth";
import { useModal } from "@/context/modal";
import { Profile } from "@/types";
import Link from "next/link";

function ProfileCard({ profile }: { profile: Profile }) {
  const { image, name, id, description } = profile;
  const { isAdmin } = useAuth();
  const { isOpen, setIsOpen, setProfileId, setType } = useModal();

  return (
    <>
      <div className="flex  flex-col border-2 border-primary bg-white rounded-lg overflow-hidden">
        <Link href={`profile/${id}`} className="overflow-hidden">
          <div
            role="image"
            aria-label={`${name}'s image`}
            style={{ backgroundImage: `url(${image})` }}
            className="h-[30vh]  bg-no-repeat bg-cover bg-top duration-300 hover:scale-110"
          ></div>
        </Link>
        <div className="px-2 py-2 rounded-full">
          <div className="text-xl font-bold text-shade2">
            {name.toUpperCase()}
          </div>
          <div className="text-gray1">{description}</div>
        </div>
        {isAdmin && (
          <div className="flex justify-around mt-auto p-2">
            <button
              className="px-4 py-2 text-center rounded-lg bg-green-800 text-white font-bold  hover:bg-green-600"
              onClick={() => {
                setIsOpen(true);
                setProfileId(id);
                setType("edit");
              }}
            >
              Edit
            </button>
            <button
              className="px-4  py-2 text-center rounded-lg bg-red-800 text-white font-bold hover:bg-red-600"
              onClick={() => {
                // alert(id);
                setIsOpen(true);
                setProfileId(id);
                setType("delete");
              }}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default ProfileCard;
