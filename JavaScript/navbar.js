window.addEventListener('load', function () {
  function checkBurgerButtonClasses(burgerButton){
    for(let i = 0; i < burgerButton.classList.length; i++){
      if(burgerButton.classList[i] == 'rotate-icon'){
        return true;
      }
    }
    return false;
  }
  function addEmptyDivToFirstElement(){
    const navbar = document.getElementById('navbar');
    const emptyDiv = document.createElement('div');
    emptyDiv.style.height = navbar.offsetHeight + 'px';
    // emptyDiv.style.backgroundColor = "#000";
    navbar.nextElementSibling.prepend(emptyDiv);
  }
  function addPaddingToFirstElement(padding){
    const navbar = document.getElementById('navbar');
    if(!padding){
      padding = parseInt(window.getComputedStyle(navbar.nextElementSibling, null).getPropertyValue('padding-top'));
    }
    navbar.nextElementSibling.style.paddingTop = padding + navbar.offsetHeight + 'px';
  }
  // function addPaddingToFirstElement(){
  //   const navbar = document.getElementById('navbar');
  //   const firstElementsPaddingTop = parseInt(window.getComputedStyle(navbar.nextElementSibling, null).getPropertyValue('padding-top'));
  //   navbar.nextElementSibling.style.paddingTop = firstElementsPaddingTop + navbar.offsetHeight + 'px';
  // }
  // function handleMatchedMedia(e){
  //   if (e.matches) {
  //     addPaddingToFirstElement();
  //   }
  // }
  // addPaddingToFirstElement();
  // const tabletMediaQuery = window.matchMedia('(max-width: 1024px)');
  // tabletMediaQuery.addEventListener("change", () => {
  //   console.log("da");
  //   addPaddingToFirstElement(72);
  // });
  // const desktopMediaQuery = window.matchMedia('(min-width: 1025px)');
  // desktopMediaQuery.addEventListener("change", () => {
  //   addPaddingToFirstElement(120);
  // });
  addEmptyDivToFirstElement();


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
      menuItems.style.right = '-35vw';
    }else{
      burgerButton.classList.add('rotate-icon');
      menuItems.style.right = '0px';
    }
  });
  this.addEventListener('click', function(event){
    if(checkBurgerButtonClasses(burgerButton) && !event.target.classList.contains('burger-icon')){
      burgerButton.classList.remove('rotate-icon');
      menuItems.style.right = '-35vw';
    }
  });
}, false);