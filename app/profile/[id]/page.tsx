import ProfileDetails from "@/components/Page/ProfileDetails";
import { getProfileById } from "@/data";

async function page({ params }: { params: Promise<{ id: string }> }) {
  const id = Number((await params).id);
  if (isNaN(id)) return <div>Provided Id is not valid</div>;
  const profile = getProfileById(id);
  if (!profile)
    return <div>OOP's the id you have inserted is not exist yet</div>;

  return <ProfileDetails profile={profile} />;
}

export default page;
