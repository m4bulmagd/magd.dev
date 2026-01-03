import { BiBriefcase } from "react-icons/bi";

const education = {
  name: "education",
  title: "Education",
  type: "document",
  icon: BiBriefcase,
  fields: [
    {
      name: "name",
      title: "Institute Name",
      type: "string",
      description: "What is the name of the institute?",
    },
    {
      name: "degree",
      title: "Degree",
      type: "string",
      description: "Enter the degree. E.g: Master of Science",
    },
    {
      name: "logo",
      title: "Institute Logo",
      type: "image",
    },
    {
      name: "startDate",
      title: "Start Date",
      type: "date",
    },
    {
      name: "endDate",
      title: "End Date",
      type: "date",
    },
  ],
};

export default education;
