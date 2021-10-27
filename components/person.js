import Image from "next/image";
import SocialLink from "./social-link";

export default function Person({ fullName, role, story, imageSrc, socials }) {
  return (
    <div>
      <div className="h-48 sm:h-60 md:h-80 bg-gray-100 overflow-hidden rounded-lg shadow-lg mb-2 sm:mb-4">
        <Image
          src={imageSrc}
          loading="eager"
          alt={`Picture of ${fullName}`}
          className="w-full h-full object-cover object-center"
          width={500}
          height={500}
        />
      </div>

      <div>
        <div className="text-indigo-500 md:text-lg font-bold">{fullName}</div>
        <p className="text-gray-500 text-sm md:text-base mb-3 md:mb-4">
          {role}
        </p>
        <div className="flex">
          <div className="flex gap-4">
            {socials.linkedIn && (
              <SocialLink socialType="linkedIn" url={socials.linkedIn} />
            )}
            {socials.github && (
              <SocialLink socialType="github" url={socials.github} />
            )}
            {socials.twitter && (
              <SocialLink socialType="twitter" url={socials.twitter} />
            )}
            {socials.personal && (
              <SocialLink socialType="personal" url={socials.personal} />
            )}
          </div>
        </div>
        {story && <p className="text-xs text-gray-800 mt-3">{story}</p>}
      </div>
    </div>
  );
}
