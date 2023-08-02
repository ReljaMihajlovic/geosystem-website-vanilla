window.addEventListener('load', function () {
  function checkBurgerButtonClasses(burgerButton){
    for(let i = 0; i < burgerButton.classList.length; i++){
      if(burgerButton.classList[i] == 'rotate-icon'){
        return true;
      }
    }
    return false;
  }
  function setCssNavbarHeight(){
    const navbar = document.getElementById('navbar');
    document.documentElement.style.setProperty('--navbar-height', navbar.offsetHeight + 'px');
  }
  //Initial setting of css navbar height variable
  setCssNavbarHeight();
  const mediaQuery640 = window.matchMedia("(max-width: 640px)");
  mediaQuery640.onchange = (e) => {
    setCssNavbarHeight();
  };
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