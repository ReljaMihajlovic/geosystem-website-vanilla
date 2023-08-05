function getFirstIconsOffset(){
    return document.querySelector('.icon').offsetTop;
}
function getLastIconsOffset(){
    const icons = document.querySelectorAll('.icon');
    return icons[icons.length - 1].offsetTop;
}
function changeDecorationLinesHeight(){
    document.querySelector('.decoration-line').style.height = getLastIconsOffset() - getFirstIconsOffset() + 'px';
}
function changeBackgroundHeight(){
    const backgroundFirstPart = document.querySelector('.background-1');
    const background2 = this.document.querySelector('.background-2');
    const middleImage = this.document.getElementById('middle-image');
    backgroundFirstPart.style.height = middleImage.offsetTop + middleImage.offsetHeight/2 + 'px';
    background2.style.top = backgroundFirstPart.style.height;
}
window.addEventListener('load', function () {
    this.addEventListener("resize", (event) => {
        changeBackgroundHeight();
        changeDecorationLinesHeight();
    });
}, false);