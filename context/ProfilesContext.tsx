"use client";
import { profiles as data } from "@/data";
import { Profile } from "@/types";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";

const ProfileContext = createContext<
  | {
      profiles: Profile[];
      //   setProfiles: React.Dispatch<React.SetStateAction<Profile[]>>;
      getProfileById: (id: number) => Profile | undefined;
      deleteProfileById: (id: number) => boolean;
      updateProfileById: (id: number, profile: Profile) => boolean;
      addNewProfile: (profile: Profile) => number;
    }
  | undefined
>(undefined);

function ProfileProvider({ children }: { children: ReactNode }) {
  const [profiles, _setProfiles] = useState((): Profile[] => {
    return [...data];
  });
  const getProfileById = useCallback(
    (id: number): Profile | undefined => {
      return profiles.find((profile) => profile.id === id);
    },
    [profiles]
  );
  const deleteProfileById = useCallback(
    (id: number): boolean => {
      _setProfiles((_profiles) => {
        const updatedProfiles = _profiles.filter(
          (profile) => profile.id !== id
        );
        return [...updatedProfiles];
      });
      let now = Date.now() + 1000;
      while (Date.now() < now) {}
      return true;
    },
    [profiles]
  );
  const updateProfileById = useCallback(
    (id: number, profile: Profile): boolean => {
      const updatedProfiles = profiles.filter((profile) => profile.id !== id);
      if (updateProfileById.length === profiles.length) return false;
      updatedProfiles.push(profile);
      _setProfiles([...updatedProfiles]);
      return true;
    },
    [profiles]
  );
  const addNewProfile = useCallback(
    (profile: Profile): number => {
      profile.id = profiles.length;
      const updatedProfiles = [...profiles, profile];
      _setProfiles([...updatedProfiles]);
      return profile.id;
    },
    [profiles]
  );
  return (
    <ProfileContext.Provider
      value={{
        profiles,
        getProfileById,
        deleteProfileById,
        updateProfileById,
        addNewProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

function useProfile() {
  const context = useContext(ProfileContext);
  if (context === undefined)
    throw new Error("ProfileContext is used outside of ProfileProvider");
  return context;
}

export { ProfileProvider, useProfile };
