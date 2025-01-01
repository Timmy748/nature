export default class Slide {
  constructor(slide, delay = 2000) {
    this.slide = document.querySelector(slide);
    this.items = document.querySelectorAll(`${slide} > *`);
    this.active = 0;
    this.delay = delay;
    this.activeClass = 'ativo';
    this.next = this.next.bind(this);
    this.stopSlide = this.stopSlide.bind(this);
    this.rotateSlide = this.rotateSlide.bind(this);

    this.init();
  }

  stopSlide() {
    clearTimeout(this.timeout);
  }

  activeSlide(index) {
    this.items.forEach((item) => {
      item.classList.remove(this.activeClass);
    });
    this.active = index;
    this.items[index].classList.add(this.activeClass);
    this.rotateSlide();
  }

  next() {
    if (this.active < this.items.length - 1) {
      this.activeSlide(this.active + 1);
    } else {
      this.activeSlide(0);
    }
  }

  rotateSlide() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.next, this.delay);
  }

  addEvent() {
    this.slide.addEventListener('mouseover', this.stopSlide);
    this.slide.addEventListener('mouseout', this.rotateSlide);
  }

  init() {
    if (this.slide) {
      this.activeSlide(0);
      this.addEvent();
    }
    return this;
  }
}
