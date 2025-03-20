// data/iconData.ts

// Type definition for icon data
export type IconDataType = {
  name?: string;
  icon: string;
  label?: string;
  href: string;
};

// Type definition for skill icons
export type SkillType = {
  content: string;
  type: "icon" | "svg";
  textColor?: string;
  label: string;
};

export type FooterSocialLinkType = {
  href: string;
  iconClass: string;
  ariaLabel: string;
}

// Arrow icon
export const arrowIcon = "ri-arrow-up-s-line";

// Navigation icons
export const navIcons: IconDataType[] = [
  { name: "Home", href: "#home", icon: "ri-home-line" },
  { name: "Projects", href: "#projects", icon: "ri-folder-line" },
  { name: "Services", href: "#services", icon: "ri-file-edit-line" },
  { name: "Experience", href: "#experience", icon: "ri-honour-line" },
  { name: "Contact", href: "#contact", icon: "ri-send-plane-line" },
] as const;

// Social Links
export const socialLinks: IconDataType[] = [
  { icon: "ri-linkedin-box-line", href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: "ri-github-line", href: "https://github.com/", label: "GitHub" },
  { icon: "un", href: "https://unstop.com/mentor/omkarpalika?ref=AsfSjJT", label: "Unstop" },
] as const;

// Skill icons
export const skills: SkillType[] = [
  { content: "ri-html5-fill", type: "icon", textColor: "text-orange-600", label: "HTML5" },
  { content: "ri-css3-fill", type: "icon", textColor: "text-blue-500", label: "CSS3" },
  { content: "ri-javascript-fill", type: "icon", textColor: "text-yellow-400", label: "JavaScript" },
  { content: "ri-reactjs-line", type: "icon", textColor: "text-blue-400", label: "React" },
  { content: "ri-nextjs-fill", type: "icon", label: "Next.js" },
  { content: "ri-bootstrap-fill", type: "icon", textColor: "text-violet-400", label: "Bootstrap" },
  { content: "ri-tailwind-css-fill", type: "icon", textColor: "text-cyan-400", label: "Tailwind CSS" },
  { content: "ri-github-fill", type: "icon", textColor: "text-white", label: "GitHub" },
  { content: "./icons/python.svg", type: "svg", label: "Python" },
  { content: "./icons/dart.svg", type: "svg", label: "Dart" },
] as const;

// Footer Social icons
export const footerSocialLinks: FooterSocialLinkType[] = [
  { href: "https://www.instagram.com/omkarpalika", iconClass: "ri-instagram-line", ariaLabel: "Instagram Profile" },
  { href: "https://www.linkedin.com/in/omkar-palika/", iconClass: "ri-linkedin-line", ariaLabel: "LinkedIn Profile" },
  { href: "https://github.com/OmkarPalika", iconClass: "ri-github-line", ariaLabel: "GitHub Profile" },
  { href: "https://g.dev/omkar-palika", iconClass: "ri-google-line", ariaLabel: "Google Developer Profile" },
  { href: "https://learn.microsoft.com/en-us/users/omkarpalika-4758/", iconClass: "ri-microsoft-fill", ariaLabel: "Microsoft Learn Profile" },
  { href: "https://www.hackerrank.com/profile/palikaomkar_22_1", iconClass: "", ariaLabel: "Hackerrank Profile"},
  { href: "https://leetcode.com/u/palikaomkar/", iconClass: "", ariaLabel: "LeetCode Profile"}
] as const;