window.addEventListener('load', function () {
  function checkBurgerButtonClasses(burgerButton){
    for(let i = 0; i < burgerButton.classList.length; i++){
      if(burgerButton.classList[i] == 'rotate-icon'){
        return true;
      }
    }
    return false;
  }
  var lastScrollTop;
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll',function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
      const navbarHeight = navbar.offsetHeight;
      navbar.style.top = '-' + navbarHeight + 'px';
    }
    else{
      navbar.style.top = '0px';
    }
    lastScrollTop = scrollTop;
  });
  const firstElementsPaddingTop = parseInt(window.getComputedStyle(navbar.nextElementSibling, null).getPropertyValue('padding-top'));
  navbar.nextElementSibling.style.paddingTop = firstElementsPaddingTop + navbar.offsetHeight + 'px';
  const burgerButton = this.document.querySelector('.burger-icon');
  const menuItems = this.document.querySelector('.menu-items');
  burgerButton.addEventListener('click', function(){
    if(checkBurgerButtonClasses(burgerButton)){
      burgerButton.classList.remove('rotate-icon');
      menuItems.style.right = '-35vw';
    }else{
      burgerButton.classList.add('rotate-icon');
      menuItems.style.right = '0px';
    }
  });
  this.addEventListener('click', function(event){
    console.log(event.target);
    if(checkBurgerButtonClasses(burgerButton) && !event.target.classList.contains('burger-icon')){
      burgerButton.classList.remove('rotate-icon');
      menuItems.style.right = '-35vw';
    }
  });
}, false);