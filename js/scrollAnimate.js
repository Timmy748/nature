import debounce from "./debouce.js";

export default class ScrollAnimate {
  constructor(elements) {
    this.elements = document.querySelectorAll(elements);
    this.animateClass = 'animate';
    this.offset = (window.innerHeight * 3) / 4;
    this.info = [];
    this.checkDistance = debounce(this.checkDistance.bind(this), 50);

    this.init();
  }

  getDistance() {
    this.info = [...this.elements].map((item) => {
      const offsetTop = item.offsetTop;
      return {
        element: item,
        offsetTop,
      };
    });
  }

  isInViewport(element) {
    const scrollPos = window.pageYOffset;
    const start = element.offsetTop - this.offset;
    return scrollPos > start;
  }

  checkDistance() {
    this.getDistance();
    this.info.forEach((item) => {
      if (this.isInViewport(item)) {
        item.element.classList.add(this.animateClass);
      } else {
        item.element.classList.remove(this.animateClass);
      }
    });
  }

  addEvent() {
    window.addEventListener('scroll', this.checkDistance);
  }

  init() {
    this.checkDistance();
    this.addEvent();
  }
}
