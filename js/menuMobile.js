export default class MenuMobile {
  constructor(btnMenu, menu) {
    this.btnMenu = document.querySelector(btnMenu);
    this.menu = document.querySelector(menu);
    this.activeClass = 'ativo';
    this.toggleMenu = this.toggleMenu.bind(this);

    this.init();
  }

  toggleMenu() {
    this.btnMenu.classList.toggle(this.activeClass);
    this.menu.classList.toggle(this.activeClass);
  }

  addEvent() {
    this.btnMenu.addEventListener('click', this.toggleMenu);
    this.btnMenu.addEventListener('touchstart', this.toggleMenu);
  }

  init() {
    if (this.btnMenu && this.menu) {
      this.addEvent();
    }
    return this;
  }
}
