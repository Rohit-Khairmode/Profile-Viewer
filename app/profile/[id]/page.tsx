import ProfileDetails from "@/components/Page/ProfileDetails";

async function page({ params }: { params: Promise<{ id: string }> }) {
  const id = Number((await params).id);
  if (isNaN(id)) return <div>Provided Id is not valid</div>;

  return <ProfileDetails profileId={id} />;
}

export default page;
