window.addEventListener('load', function () {
  function checkBurgerButtonClasses(burgerButton){
    for(let i = 0; i < burgerButton.classList.length; i++){
      if(burgerButton.classList[i] == 'rotate-icon'){
        return true;
      }
    }
    return false;
  }
  function addPaddingToFirstElement(padding){
    const navbar = document.getElementById('navbar');
    if(!padding){
      padding = parseInt(window.getComputedStyle(navbar.nextElementSibling, null).getPropertyValue('padding-top'));
    }
    navbar.nextElementSibling.style.paddingTop = padding + navbar.offsetHeight + 'px';
  }
  function addPaddingToFirstElement(){
    const navbar = document.getElementById('navbar');
    const firstElementsPaddingTop = parseInt(window.getComputedStyle(navbar.nextElementSibling, null).getPropertyValue('padding-top'));
    navbar.nextElementSibling.style.paddingTop = firstElementsPaddingTop + navbar.offsetHeight + 'px';
  }
  addPaddingToFirstElement();
  var lastScrollTop;
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
  const burgerButton = this.document.querySelector('.burger-icon');
  const menuItems = this.document.querySelector('.menu-items');
  burgerButton.addEventListener('click', function(){
    if(checkBurgerButtonClasses(burgerButton)){
      burgerButton.classList.remove('rotate-icon');
      menuItems.classList.remove('open-navbar');
      menuItems.classList.add('close-navbar');
      // document.querySelector('.top-bar').style.right = '0px';
    }else{
      burgerButton.classList.add('rotate-icon');
      menuItems.classList.remove('close-navbar');
      menuItems.classList.add('open-navbar');
      // document.querySelector('.top-bar').style.right = 'unset';
    }
  });
  this.addEventListener('click', function(event){
    if(checkBurgerButtonClasses(burgerButton) && !event.target.classList.contains('burger-icon')){
      burgerButton.classList.remove('rotate-icon');
      menuItems.classList.remove('open-navbar');
      menuItems.classList.add('close-navbar');
      // document.querySelector('.top-bar').style.right = '0px';
    }
  });
}, false);