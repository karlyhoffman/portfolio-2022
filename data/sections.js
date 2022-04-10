class Section {
  constructor({ id, subtitle }) {
    this.id = id;
    // this.title = title
    this.subtitle = subtitle;
  }
}

const SECTIONS = [
  new Section({
    id: 'home',
    subtitle: 'Karly Hoffman',
  }),
  new Section({
    id: 'about',
    subtitle: 'Who I Am',
  }),
  new Section({
    id: 'skills',
    subtitle: 'What I Know',
  }),
  new Section({
    id: 'work',
    subtitle: `What I've Built`,
  }),
  new Section({
    id: 'contact',
    subtitle: "How to Reach Me",
  }),
];

export default SECTIONS;
