class Project {
  constructor({ id, title, url, description, technologies }) {
    this.id = id;
    this.title = title;
    this.url = url;
    this.description = description;
    this.technologies = technologies;
  }
}

const PROJECTS = {
  featured: [
    new Project({
      id: "outside-academy",
      title: "Outside Academy",
      url: "https://www.nationalgeographic.com/outside-academy?park=yosemite",
      description:
        "An interactive Next.js website featuring scroll-based animations and a custom component library for hotspot detail views.",
      technologies: ["React / Next.js", "SCSS", "GSAP"],
    }),
    new Project({
      id: "gan",
      title: "GAN",
      url: "https://gan.com/",
      description:
        "A responsive Next.js website connected to a Prismic headless CMS that features parallax animations and highly customizable templates for the CMS authors.",
      technologies: [
        "React / Next.js",
        "SCSS",
        "Prismic",
        "GSAP",
        "Google Analytics",
      ],
    }),
    new Project({
      id: "mcd-visid",
      title: `M<span class="lower">c</span>D V<span class="lower">is</span>ID Hub`,
      url: "https://design.mcdonalds.com/",
      description:
        "A responsive website built using Next.js and a decoupled Strapi CMS to feature the company's style guidelines and design assets.",
      technologies: ["React / Next.js", "SCSS", "Strapi"],
    }),
  ],
  other: [
    new Project({
      id: "bsa",
      title: "The Black Sheep Agency",
      url: "https://theblacksheepagency.com/",
    }),
    new Project({
      id: "core",
      title: "Core Spaces",
      url: "https://corespaces.com/",
    }),
  ],
};

export default PROJECTS;
