//todo: отключить плагин в мобильной версии
var elem = document.querySelector('.photos__list');
var msnry = new Masonry( elem, {
    // options
    itemSelector: 'li',
    columnWidth: '.photos__item',
    percentPosition: true
});