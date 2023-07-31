window.addEventListener('load', function () {
    function getFirstIconsOffset(){
        return document.querySelector('.icon').offsetTop;
    }
    function getLastIconsOffset(){
        const icons = document.querySelectorAll('.icon');
        console.log(icons);
        return icons[icons.length - 1].offsetTop;
    }
    function changeDecorationLinesHeight(){
        document.querySelector('.decoration-line').style.height = getLastIconsOffset() - getFirstIconsOffset() + 'px';
    }
    const backgroundFirstPart = document.querySelector('.background-1');
    const background2 = this.document.querySelector('.background-2');
    const middleImage = this.document.getElementById('middle-image');
    backgroundFirstPart.style.height = middleImage.offsetTop + middleImage.offsetHeight/2 + 'px';
    background2.style.top = backgroundFirstPart.style.height;
    this.setTimeout(changeDecorationLinesHeight, 20);
    this.addEventListener("resize", (event) => {
        backgroundFirstPart.style.height = middleImage.offsetTop + middleImage.offsetHeight/2 + 'px';
        background2.style.top = backgroundFirstPart.style.height;
        changeDecorationLinesHeight();
    });
}, false);