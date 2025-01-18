import {
  Building2Icon,
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";

function SocialMediaIcon({ icon, link }: { icon: string; link: string }) {
  if (icon.toLocaleLowerCase() === "facebook")
    return (
      <Link href={link}>
        <FacebookIcon size={24} />
      </Link>
    );
  if (icon.toLocaleLowerCase() === "instagram")
    return (
      <Link href={link}>
        <InstagramIcon size={24} />
      </Link>
    );
  if (icon.toLocaleLowerCase() === "twitter")
    return (
      <Link href={link}>
        <TwitterIcon size={24} />
      </Link>
    );
  if (icon.toLocaleLowerCase() === "linkedin")
    return (
      <Link href={link}>
        <LinkedinIcon size={24} />
      </Link>
    );
  if (icon.toLocaleLowerCase() === "github")
    return (
      <Link href={link}>
        <GithubIcon size={24} />
      </Link>
    );
  return (
    <Link href={link}>
      <Building2Icon size={32} />
    </Link>
  );
}

export default SocialMediaIcon;
