window.addEventListener('load', function () {
    function getFirstIconsOffset(){
        return document.querySelector('.icon:nth-of-type(1)').offsetTop;
    }
    function getLastIconsOffset(){
        return document.querySelector('.icon:last-of-type').offsetTop;
    }
    function changeDecorationLinesHeight(){
        document.querySelector('.decoration-line').style.height = getLastIconsOffset() - getFirstIconsOffset() + 'px';
    }
    const backgroundFirstPart = document.querySelector('.background-1');
    const background2 = this.document.querySelector('.background-2');
    const middleImage = this.document.getElementById('middle-image');
    backgroundFirstPart.style.height = middleImage.offsetTop + middleImage.offsetHeight/2 + 'px';
    background2.style.top = backgroundFirstPart.style.height;
    changeDecorationLinesHeight();
    this.addEventListener("resize", (event) => {
        backgroundFirstPart.style.height = middleImage.offsetTop + middleImage.offsetHeight/2 + 'px';
        background2.style.top = backgroundFirstPart.style.height;
        changeDecorationLinesHeight();
    });
    console.log(middleImage.offsetTop);
}, false);