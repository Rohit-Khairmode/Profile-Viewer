import { Profile } from "@/types";
import ProfileCard from "./ProfileCard";
import { memo } from "react";
import { useProfile } from "@/context/ProfilesContext";

function ProfileCards({ search }: { search: string }) {
  //   console.log("cards rendered");
  let i = 0;
  const { profiles } = useProfile();
  const filteredProfiles = profiles.filter((profile) => {
    return (
      profile.name.toLowerCase().includes(search.toLowerCase()) ||
      profile.description.toLowerCase().includes(search.toLowerCase())
    );
  });
  //   console.log("deffered value", search);
  return (
    <>
      {filteredProfiles.map((profile: Profile) => {
        return <ProfileCard key={profile.id} profile={profile} />;
      })}
    </>
  );
}

export default memo(ProfileCards);
