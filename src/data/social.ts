import { SocialLink, ContactInfo } from '../types';

export const socialLinks: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/ryan-tetro/",
    icon: "linkedin",
    label: "LinkedIn Profile"
  },
  {
    platform: "GitHub",
    url: "https://github.com/ryantetro",
    icon: "github",
    label: "GitHub Profile"
  },
  {
    platform: "X",
    url: "https://x.com/ryan_tetro",
    icon: "twitter",
    label: "X Profile"
  }
];

export const contactInfo: ContactInfo = {
  email: "ryantetro@gmail.com",
  social: socialLinks,
  availability: "Open to full-time roles, startup collaborations, and freelance projects",
  message: "Whether you have a startup idea, need an engineer, or want to talk AI and product development — I'd love to connect."
};
