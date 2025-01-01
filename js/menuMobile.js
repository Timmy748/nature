export default class MenuMobile {
  constructor(btnMenu, menu) {
    this.btnMenu = document.querySelector(btnMenu);
    this.menu = document.querySelector(menu);
    this.activeClass = 'ativo';
    this.toggleMenu = this.toggleMenu.bind(this);

    this.init();
  }

  toggleMenu(event) {
    if (event.type === "touchstart") event.preventDefault();
    
    this.btnMenu.classList.toggle(this.activeClass);
    this.menu.classList.toggle(this.activeClass);
    const active = this.btnMenu.classList.contains(this.activeClass)
    this.btnMenu.setAttribute("aria-expanded", active)
    if(active){
      this.btnMenu.setAttribute("aria-label", "Fechar Menu")
    } else{
      this.btnMenu.setAttribute("aria-label", "Abrir Menu")
    }
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
