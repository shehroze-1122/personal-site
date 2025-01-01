import { GitHub, Linkedin, Mail } from "react-feather";

const data = {
  links: [
    {
      key: "email",
      type: "Email",
      href: "mailto:talat.shehroze@gmail.com",
      label: "talat.shehroze@gmail.com",
      Icon: Mail,
    },
    {
      key: "linkedin",
      type: "LinkedIn",
      href: "https://www.linkedin.com/in/shehroze-talat/",
      label: "/in/shehroze-talat",
      Icon: Linkedin,
    },
    {
      key: "github",
      type: "GitHub",
      href: "https://github.com/shehroze-1122",
      label: "@shehroze-1122",
      Icon: GitHub,
    },
  ],
};

export default data;
