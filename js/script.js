import TabNav from './tabNav.js';
import ScrollSuave from './scrollSuave.js';
import ActiveSection from './activeSection.js';
import MenuMobile from './menuMobile.js';
import Slide from './slide.js';
import ScrollAnimate from './scrollAnimate.js';

const animaisTabNav = new TabNav('.animais .tab-menu a', '.animais .item');
const florestaTabNav = new TabNav('.florestas .tab-menu a', '.florestas .item');
const montanhaTabNav = new TabNav('.montanhas .tab-menu a', '.montanhas .item');

const scrollSuave = new ScrollSuave(".menu-nav a[href^='#']");
const scrollAnimate = new ScrollAnimate("[data-anime='scroll']");
const activeSection = new ActiveSection('[data-section]', '.menu');
const menuMobile = new MenuMobile('.mobile-btn', '.menu-nav.mobile-menu');

const slide = new Slide('.slide');
