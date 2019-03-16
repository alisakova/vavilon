var openMenu = document.querySelector('._open-menu');
var closeMenu = document.querySelector('._close-menu');
var menu = document.querySelector('._menu');
var subMenu = document.querySelector('._submenu');
var closeSubMenu = document.querySelector('._close-submenu');
var openSubMenu = document.querySelector('.heading__mobile-link');
if (menu) {
  openMenu.addEventListener('click', function(e) {
    e.stopPropagation();
    menu.classList.add('active');
  });

  closeMenu.addEventListener('click', function(e) {
    e.stopPropagation();
    menu.classList.remove('active');
  });
}

if (subMenu) {
  openSubMenu.addEventListener('click', function(e) {
    e.stopPropagation();
    subMenu.classList.add('active');
  });

  closeSubMenu.addEventListener('click', function(e) {
    e.stopPropagation();
    subMenu.classList.remove('active');
  });
}
