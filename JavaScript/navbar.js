window.addEventListener('load', function () {
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
console.log();
}, false);