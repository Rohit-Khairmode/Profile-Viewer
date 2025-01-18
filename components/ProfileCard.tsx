import { useAuth } from "@/context/auth";
import { Profile } from "@/types";
import Button, { ButtonTypes } from "./Button";
import Link from "next/link";
import { useEffect } from "react";

function ProfileCard({ profile }: { profile: Profile }) {
  const { image, name, id, description } = profile;
  const { isAdmin } = useAuth();

  return (
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
        <div className="flex gap-2">
          <Button onClick={() => {}} type={ButtonTypes.Edit}>
            Edit
          </Button>
          <Button onClick={() => {}} type={ButtonTypes.Delete}>
            Delete
          </Button>
        </div>
      )}
    </div>
  );
}

export default ProfileCard;
