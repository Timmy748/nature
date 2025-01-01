import debounce from "./debouce.js";

export default class ActiveSection {
  constructor(sections, menu) {
    this.sections = document.querySelectorAll(sections);
    this.menu = document.querySelector(menu);
    this.activeClass = 'ativo';
    this.sectionInfo = [];

    this.checkSection = debounce(this.checkSection.bind(this), 50);
    this.init();
  }

  updateSections() {
    this.sectionInfo = [...this.sections].map((section) => {
      const menuHeight = this.menu.clientHeight;
      const height = section.clientHeight;
      const offsetTop = section.offsetTop;
      const id = section.getAttribute('id');
      const itemMenu = document.querySelector(`a[href="#${id}"]`);
      return { menuHeight, height, offsetTop, itemMenu };
    });
  }

  isInViewport(item) {
    const scrollPos = window.pageYOffset;
    const start = item.offsetTop - item.menuHeight;
    const end = item.offsetTop + item.height - item.menuHeight;
    return scrollPos > start && scrollPos < end;
  }

  checkSection() {
    this.updateSections();
    this.sectionInfo.forEach((item) => {
      if (this.isInViewport(item)) {
        item.itemMenu.classList.add(this.activeClass);
      } else {
        item.itemMenu.classList.remove(this.activeClass);
      }
    });
  }

  addEvent() {
    window.addEventListener('scroll', this.checkSection);
  }

  init() {
    if (this.sections.length) {
      this.updateSections();
      this.addEvent();
    }
    return this
  }
}
