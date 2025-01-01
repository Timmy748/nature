export default class TabNav {
  constructor(btn, itens) {
    this.btns = document.querySelectorAll(btn);
    this.itens = document.querySelectorAll(itens);
    this.activeClass = 'ativo';

    this.showSection = this.showSection.bind(this);

    this.init()
  }

  clearActiveClass() {
    this.btns.forEach((btn) => btn.classList.remove(this.activeClass));
    this.itens.forEach((item) => item.classList.remove(this.activeClass));
  }

  activateItem(target, targetItem) {
    target.classList.add(this.activeClass);
    targetItem.classList.add(this.activeClass);
  }

  showSection(event) {
    event.preventDefault();
    const target = event.currentTarget;
    const targetItem = document.querySelector(target.getAttribute('href'));

    this.clearActiveClass();
    this.activateItem(target, targetItem);
  }

  activateFirstItem() {
    if (this.btns.length && this.itens.length) {
      this.activateItem(this.btns[0], this.itens[0]);
    }
  }

  addEvent() {
    this.btns.forEach((btn) => {
      btn.addEventListener('click', this.showSection);
    });
  }

  init() {
    if (this.btns.length && this.itens.length) {
      this.activateFirstItem();
      this.addEvent();
    }

    return this
  }
}
