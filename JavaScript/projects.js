window.addEventListener('load', function () {
    function reoredrProjectImages(){
        let everyProjectImage = document.querySelectorAll('.project-img');
        for(let i = 0; i < everyProjectImage.length; i++){
            everyProjectImage[i].previousElementSibling.appendChild(everyProjectImage[i]);
        }
    }
    function resetProjectImagesOrder(){
        let everyProjectImage = document.querySelectorAll('.project-img');
        for(let i = 0; i < everyProjectImage.length; i++){
            everyProjectImage[i].parentElement.parentElement.appendChild(everyProjectImage[i]);
        }
    }
    const mediaQuery1024 = window.matchMedia('(max-width: 1024px)');
    //Initial media query check
    if(mediaQuery1024.matches){
        reoredrProjectImages();
    }
    mediaQuery1024.addEventListener("change", () => {
        if(this.window.innerWidth > 1024){
            resetProjectImagesOrder();
        }else if(this.window.innerWidth <= 1024){
            reoredrProjectImages();
        }
    });

}, false);