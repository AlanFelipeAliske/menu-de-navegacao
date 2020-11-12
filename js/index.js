/*  Modelo 1 de fazer o menu
function styleMenu(){
  let menuArea = document.getElementById('menu-area');
  let navMenu = document.getElementById('nav-menu');

  if(menuArea.classList.contains('menu-opned') == true){
    menuArea.classList.remove('menu-opned');
    navMenu.classList.remove('navi');

  } else {
    menuArea.classList.add('menu-opned');
    navMenu.classList.add('navi')
  }
}
*/

//  Modelo 2 de fazer o menu

function styleMenu(){
  let menuArea = document.getElementById('menu-area');
  let navMenu = document.getElementById('nav-menu');
  
  if(menuArea.style.width == '0px'){
    menuArea.style.width = '250px';
    navMenu.style.display = 'block';
  } else{
    menuArea.style.width = '0px';
    navMenu.style.display = 'none';
  }
}
















