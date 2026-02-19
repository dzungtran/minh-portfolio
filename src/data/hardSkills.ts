interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "SEO Content",
    description:
      "Manage teams, propose SEO strategies, content plans, and data reports.",
    icon: "record",
  },
  {
    name: "Technical & Off-Page SEO",
    description:
      "Develop technical SEO checklists and optimization guidelines.",
    icon: "toolbox",
  },
  {
    name: "GEO, AEO, AIO",
    description:
      "R&D, test, and implement AI prompts for improved search touchpoints.",
    icon: "microphone",
  },
  {
    name: "Other Search Touchpoints",
    description: "ASO, Local Map, and SEO for YouTube.",
    icon: "eye-password",
  },

  {
    name: "Martech & Platform Growth (CRO)",
    description:
      "Implement and monitor tracking for CRO touchpoints on platforms.",
    icon: "reminder-alert",
  },
  {
    name: "Data Analysis",
    description:
      "Manage data from BI, Web, App, CRM, and Ads for growth decisions.",
    icon: "headphones",
  },
  {
    name: "Website Platform Management",
    description:
      "Manage website migration and act as PO for marketing-tech team collaboration.",
    icon: "setting",
  },
  {
    name: "Google Ads",
    description: "Monitor, Implement Google Ads campaigns",
    icon: "diagnosis",
  },
  {
    name: "Content Marketing",
    description: "Create strategy, direction for YouTube, FB, Insta, Zalo",
    icon: "pencil",
  },
];

export default hardSkills;
