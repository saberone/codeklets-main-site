import { FaGithub, FaLinkedin, FaTwitter, FaUser } from "react-icons/fa";

function socialIcon(socialType) {
  {
    switch (socialType.toLowerCase()) {
      case "github":
        return <FaGithub className="w-5 h-5" />;
      case "linkedin":
        return <FaLinkedin className="w-5 h-5" />;
      case "twitter":
        return <FaTwitter className="w-5 h-5" />;
      case "github":
        return <FaGithub className="w-5 h-5" />;
      case "personal":
        return <FaUser className="w-5 h-5" />;
      default:
        return <FaUser className="w-5 h-5" />;
    }
  }
}
export default function SocialLink({ url, socialType }) {
  return (
    <>
      <a
        href={url}
        target="_blank"
        className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
        rel="noreferrer"
      >
        {socialIcon(socialType)}
      </a>
    </>
  );
}
