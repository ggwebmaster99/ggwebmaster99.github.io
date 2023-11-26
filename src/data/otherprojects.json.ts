export interface Template {
  url: string;
  description: string;
  title: string;
};

const instagram: Template = {
  url: "https://www.instagram.com/_glennjamin/",
  description: "@_glennjamin",
  title: "Instagram"
};
const vimeo: Template = {
  url: "https://vimeo.com/732283044",
  description: "",
  title: "Vimeo"
};
const email: Template = {
  url: "mailto:glennjamin.edits@gmail.com",
  description: "glennjamin.edits@gmail.com",
  title: "Email"
};

export const byName = {

  instagram,
  vimeo,
  email,


};
export const otherprojects = Object.values(byName);
