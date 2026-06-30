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
    new Tool({ name: 'Spec Kit', url: 'https://github.com/github/spec-kit' }),
    new Tool({ name: 'Claude CLI', url: 'https://code.claude.com/docs/en/cli-reference' }),
    new Tool({ name: 'Squoosh', url: 'https://squoosh.app/' }),
    new Tool({ name: 'Jira', url: 'https://www.atlassian.com/software/jira' }),
    new Tool({ name: 'Figma', url: 'https://www.figma.com/' }),
    new Tool({ name: 'Prismic', url: 'https://prismic.io/' }),
    new Tool({ name: 'Craft CMS', url: 'https://craftcms.com/' }),
    new Tool({ name: 'Postman', url: 'https://www.postman.com' }),
  ],
};

export default SKILLS;
