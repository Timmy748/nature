export default class ScrollSuave {
  constructor(links, options = { behavior: 'smooth', block: 'start' }) {
    this.links = document.querySelectorAll(links);
    this.options = options;

    this.handleEvent = this.handleEvent.bind(this);
    this.init();
  }

  getSection(target) {
    const id = target.getAttribute('href');
    return document.querySelector(id);
  }

  handleEvent(event) {
    event.preventDefault();
    const section = this.getSection(event.currentTarget);
    this.scrollTosection(section);
  }

  scrollTosection(section) {
    if (section) {
      section.scrollIntoView(this.options);
    }
  }

  addEvent() {
    this.links.forEach((link) => {
      link.addEventListener('click', this.handleEvent);
    });
  }

  init() {
    if (this.links.length) {
      this.addEvent();
    }
    return this;
  }
}
