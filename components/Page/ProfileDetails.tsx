"use client";

import { Profile } from "@/types";
import SocialMediaIcon from "../SocialMediaIcon";
import { useAuth } from "@/context/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import MapContainer from "../MapContainer";

function ProfileDetails({ profile }: { profile: Profile }) {
  const { isLogin } = useAuth();
  const router = useRouter();
  if (!isLogin) {
    router.push("/");
    return null;
  }
  const [isShowMap, setShowMap] = useState(false);
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
    <>
      <div className="flex gap-4 py-2 px-2 max-w-[1200px] text-gray-600 m-auto mt-4">
        <div
          role="img"
          aria-label={`${name}'s Image`}
          style={{ backgroundImage: `url(${image})` }}
          className=" w-[30vw] rounded-lg bg-no-repeat bg-cover bg-top border-4 border-primary"
        ></div>
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
          <button className="text-white px-4 py-2 font-bold text-2xl rounded-lg justify-self-start  hover:bg-shade1 duration-300 bg-primary">
            Show on Map
          </button>
        </div>
      </div>
      <div className="py-2 px-2 max-w-[1200px] m-auto mt-4">
        {isShowMap && (
          <div
            className={`mapComponent flex-1 `}
            style={{ height: "200px", width: "100%" }}
          >
            <MapContainer
              longitude={profile.coordinates.longitude}
              latitude={profile.coordinates.latitude}
            />
          </div>
        )}
      </div>
    </>
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
