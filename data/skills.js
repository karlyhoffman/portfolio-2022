class SkillsCategory {
  constructor({ categoryName, skills }) {
    this.categoryName = categoryName;
    this.skills = skills;
  }
}

const SKILLS = {
  primary: [
    new SkillsCategory({
      categoryName: "CSS",
      skills: [
        "SCSS",
        "SVG & CSS Animations",
        "UI Development",
        "Responsive Styling",
      ],
    }),
    new SkillsCategory({
      categoryName: "JavaScript",
      skills: ["ES6+", "React", "Next.js", "GSAP"],
    }),
  ],
  secondary: [
    new SkillsCategory({
      categoryName: "Tools I Like to Use",
      skills: [
        "Adobe Creative Suite",
        "Figma",
        "Visual Studio Code",
        "Vercel",
        "Jira",
        "Squoosh",
      ],
    }),
  ],
};

export default SKILLS;
