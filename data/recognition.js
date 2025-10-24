class Recognition {
  constructor({ id, title, url, company, projectUrl }) {
    this.id = id;
    this.title = title;
    this.url = url;
    this.projectUrl = projectUrl;
    this.company = company;
  }
}

const RECOGNITIONS = [
  new Recognition({
    id: 'outside-academy',
    title: 'Outside Academy',
    url: 'https://winners.webbyawards.com/2022/advertising-media-pr/branded-content/auto-auto-services/222276/national-geographic-x-hyundai-outside-academy',
    projectUrl: 'https://www.nationalgeographic.com/outside-academy?park=yosemite',
    company: 'Reach Creative',
  }),
  new Recognition({
    id: 'kinetic-auto',
    title: 'Kinetic Auto',
    url: 'https://graphis.com/entry/2b3d9f88-1607-4f6b-ae7e-974a99716849',
    projectUrl: 'https://www.kinetic.auto/',
    company: 'One Design Company',
  }),
];

export default RECOGNITIONS;
