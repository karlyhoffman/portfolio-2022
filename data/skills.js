class SkillsCategory {
  constructor({ categoryName, skills }) {
    this.categoryName = categoryName;
    this.skills = skills;
  }
}

class Tool {
  constructor({ name, url }) {
    this.name = name;
    this.url = url;
  }
}

const SKILLS = {
  primary: [
    new SkillsCategory({
      categoryName: 'CSS',
      skills: ['SCSS', 'SVG & CSS Animations', 'UI Development', 'Responsive Styling'],
    }),
    new SkillsCategory({
      categoryName: 'JavaScript',
      skills: ['ES6+', 'React', 'Next.js', 'GSAP'],
    }),
  ],
  tools: [
    new Tool({ name: 'Figma', url: 'https://www.figma.com/' }),
    new Tool({
      name: 'CSS Debugger',
      url: 'https://www.freecodecamp.org/news/heres-my-favorite-weird-trick-to-debug-css-88529aa5a6a3/',
    }),
    new Tool({ name: 'Adobe Creative Suite', url: 'https://www.adobe.com/' }),
    new Tool({ name: 'Squoosh', url: 'https://squoosh.app/' }),
    new Tool({ name: 'Jira', url: 'https://www.atlassian.com/software/jira' }),
    new Tool({ name: 'Vercel', url: 'https://vercel.com/' }),
    new Tool({ name: 'Prismic', url: 'https://prismic.io/' }),
    new Tool({ name: 'Craft CMS', url: 'https://craftcms.com/' }),
  ],
};

export default SKILLS;
