class Contact {
  constructor({ label, url, icon }) {
    this.label = label;
    this.url = url;
    this.icon = icon;
  }
}

const CONTACT = [
  new Contact({
    label: 'Email',
    url: 'mailto:karlyhoffman@gmail.com',
  }),
  new Contact({
    label: 'Github',
    url: 'https://github.com/karlyhoffman',
  }),
  new Contact({
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/karlyhoffman/',
  }),
  new Contact({
    label: 'CodePen',
    url: 'https://codepen.io/karlyhoffman/',
  }),
  // new Contact({
  //   label: 'Instagram',
  //   url: 'https://www.instagram.com/hungryhoff/',
  // }),
  // new Contact({
  //   label: "Ello",
  //   url: "https://ello.co/ello-govna",
  // }),
];

export default CONTACT;
