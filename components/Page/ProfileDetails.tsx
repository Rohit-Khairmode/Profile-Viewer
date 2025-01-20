"use client";

import { useAuth } from "@/context/auth";
import { useProfile } from "@/context/ProfilesContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import MapComponent2 from "../MapComponent2";
import SocialMediaIcon from "../SocialMediaIcon";

function ProfileDetails({ profileId }: { profileId: number }) {
  const { isLogin } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!isLogin) {
      router.push("/");
    }
  }, []);
  const [isShowMap, setShowMap] = useState(false);
  const { getProfileById } = useProfile();
  const profile = getProfileById(profileId);
  if (!profile)
    return <div>OOP's the id you have inserted is not exist yet</div>;
  const {
    name,
    description,
    hobbies,
    socialMedia,
    image,
    contacts: { phone, email, address },
    coordinates: { latitude, longitude },
    achievements,
  } = profile;
  return (
    <div className="mb-10">
      <div className="flex flex-col md:flex-row gap-4 py-2 px-2 max-w-[1200px] text-gray-600 m-auto mt-4 overflow-hidden">
        <div className="overflow-hidden w-[30vw] border-4 border-primary rounded-lg ">
          <div
            role="img"
            aria-label={`${name}'s Image`}
            style={{ backgroundImage: `url(${image})` }}
            className=" h-full  bg-no-repeat bg-cover bg-top  duration-300 overflow-hidden hover:scale-110"
          ></div>
        </div>
        <div>
          <div className="flex flex-col gap-2">
            <h3 className="uppercase font-bold text-2xl text-shade2 rounded-lg px-4 py-2 bg-white ">
              {name}
            </h3>
            <p className="rounded-lg px-4 py-2 bg-white ">{description}</p>
            <ul className="rounded-lg px-6 list-disc flex flex-col  gap-2 py-2 bg-white ">
              {achievements.map((achievement) => (
                <li key={Math.random()} className=" ">
                  {achievement}
                </li>
              ))}
            </ul>
            <div className="flex gap-2 rounded-lg px-4 py-2 bg-white ">
              {hobbies.map((hobby) => (
                <InterestTag key={Math.random()} interest={hobby} />
              ))}
            </div>
            <div className="flex gap-4 rounded-lg px-4 py-2 bg-white mt-auto ">
              {socialMedia.map((platform) => (
                <SocialMediaIcon
                  key={Math.random()}
                  icon={platform.platform}
                  link={platform.url}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="py-2 px-2 max-w-[1200px] m-auto mt-4">
        <h3 className="uppercase font-bold text-2xl text-shade2 rounded-lg px-4 py-2 bg-white ">
          Contacts
        </h3>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="  rounded-lg px-4 py-2 bg-white ">
            Phone no: {phone}
          </div>
          <div className="  rounded-lg px-4 py-2 bg-white ">Email: {email}</div>
          <address className="col-span-2 rounded-lg px-4 py-2 bg-white">
            Address: {address}
          </address>
          <div className="rounded-lg px-4 py-2 bg-white">
            Latitude: {latitude}
          </div>
          <div className="rounded-lg px-4 py-2 bg-white">
            Longitude: {longitude}
          </div>
          <button
            onClick={() => {
              setShowMap(!isShowMap);
            }}
            className="text-white px-4 py-2 font-bold text-2xl rounded-lg justify-self-start  hover:bg-shade1 duration-300 bg-primary"
          >
            {isShowMap ? "Close map" : " Show on Map"}
          </button>
        </div>
      </div>
      <div className=" max-w-[1200px] md:mx-auto my-4 mx-3 ">
        {isShowMap && (
          <MapComponent2 center={[latitude, longitude]} zoom={13} />
        )}
      </div>
    </div>
  );
}
function InterestTag({ interest }: { interest: string }) {
  return (
    <div className="bg-gray-200 text-gray-600 rounded-full font-bold   px-4 py-2">
      {interest}
    </div>
  );
}

export default ProfileDetails;
