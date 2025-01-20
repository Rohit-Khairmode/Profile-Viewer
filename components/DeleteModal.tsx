import { useModal } from "@/context/modal";
import { useProfile } from "@/context/ProfilesContext";
import toast from "react-hot-toast";

function DeleteModal() {
  const { isOpen, setIsOpen, profileId } = useModal();
  const { getProfileById, deleteProfileById } = useProfile();
  const profile = getProfileById(profileId);
  if (profile === undefined) {
    toast.error("Provided Id is invalid");
    setIsOpen(false);
    return null;
  }
  return (
    <div className="grid grid-cols-2 gap-4 bg-white rounded-lg  p-8 justify-center">
      <strong className="col-span-2 text-xl">
        Are you sure that you want to delete {profile.name}'s profile?
      </strong>
      <button
        className="px-4 py-2 text-center rounded-lg bg-green-800 text-white font-bold  hover:bg-green-600"
        onClick={() => {
          const isDeleted = deleteProfileById(profile.id);
          if (isDeleted) {
            toast.success(`${profile.name}'s Profile Deleted`);
          } else {
            toast.error("There is problem while deleting profile");
          }
          setIsOpen(false);
        }}
      >
        Delete
      </button>
      <button
        className="px-4  py-2 text-center rounded-lg bg-red-800 text-white font-bold hover:bg-red-600"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        Cancel
      </button>
    </div>
  );
}

export default DeleteModal;
