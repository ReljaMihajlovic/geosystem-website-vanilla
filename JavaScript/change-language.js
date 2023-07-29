window.addEventListener('load', function () {
    function setLanguageCookie(language){
        const expirationDate = new Date();
        expirationDate.setFullYear(expirationDate.getFullYear() + 1);
        const cookieValue = language + "; expires=" + expirationDate.toUTCString() + "; path=/";
        document.cookie = "language=" + cookieValue;
        console.log(document.cookie);
    }
    function getLanguageCookieValue(){
        const cookieValue = document.cookie
        .split("; ")
        .find((row) => row.startsWith("language="));
        if(cookieValue){
            return cookieValue.split("=")[1];
        }else{
            return false;
        }
    }
    function changeLanguage(language){
        fetch("../Languages/language_" + language + ".json").then(function (response){
            return response.json();
        }).then((parsedJSON)=>{
            const currentPage = document.body.getAttribute('data-page');
            const content = parsedJSON[currentPage];
            var mergedObj = { ...content, ...parsedJSON['navbar'], ...parsedJSON['footer'] };
            const elements = document.querySelectorAll('[data-translate]');
            elements.forEach(element => {
                const key = element.getAttribute('data-translate');
                if(key in mergedObj){
                    element.textContent = mergedObj[key];
                }
            })
        }).catch((error) => {
            console.log("Došlo je do greške prilikom promene jezika." + error);
        });
    }
    // document.cookie = "language=serbian; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
    // document.cookie = "language=english; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
    //Inital languge 
    if(language = getLanguageCookieValue()){
        changeLanguage(language);
    }
    const languageButtons = this.document.querySelectorAll('.button-language');
    //Add event listener to every language button
    for(btn of languageButtons){
        btn.addEventListener('click', function(){
            const language = this.getAttribute('data-language');
            setLanguageCookie(language);
            changeLanguage(language);
        });
    }
}, false);