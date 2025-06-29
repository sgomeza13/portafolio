import { CiMail } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const contacts = [
    {
      label: "Email",
      href: "mailto:simongomezarango123@gmail.com",
      icon: <CiMail size={28} />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sim%C3%B3n-g%C3%B3mez-arango-a605a32b2/",
      icon: <FaLinkedin size={28} className="text-[#0077b5]" />,
    },
    {
      label: "GitHub",
      href: "https://github.com/sgomeza13",
      icon: <FaGithub size={28} />,
    },
  ];