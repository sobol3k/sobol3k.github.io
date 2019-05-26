
function removePadding(){

    if(document.location.href.indexOf('kontakt.html') > -1){

        const article = document.querySelector('.article');
        return article.style.padding = 0;
    }
}

function addMarginToFooter(){

    if(document.location.href.indexOf('index.html') > -1 && window.outerWidth <= 750){

        const footer = document.querySelector('.footer');
        return footer.style.marginTop = 95 + 'px';
    }

    if(document.location.href.indexOf('index.html') > -1 && window.outerWidth <= 450){
        return footer.style.marginTop = 70 + 'px';
    }
}

function forMobile(btn){

    const footer = document.querySelector('.footer');

    /* RWD dla uzytkonwika jeśli wejdzie na strone po przez urządzenie które ma mniejszą rozdzielczość niż 450px */

    if(window.outerWidth <= 450){

        btn[0].textContent = "RTS";
        btn[1].textContent = "TPP";
        btn[2].textContent = "ADV";
        btn[3].textContent = "FPS";
        btn[4].textContent = "ECO";
    }
    else{

        btn[0].textContent = "strategia";
        btn[1].textContent = "skradanki";
        btn[2].textContent = "przygodowe";
        btn[3].textContent = "strzelanki";
        btn[4].textContent = "ekonomiczne";
    }

    /* dodanie marginesu górnego dla stopki kiedy rozdzielczość jest <= 750px oraz użytkownik jest na podstronie 'type/gatunek-gier' */

    if(window.innerWidth <= 750 && document.location.href.indexOf('type') > -1){

        footer.style.marginTop = 95 + "px";
    }

    /* dodanie marginesu górnego dla stopki kiedy rozdzielczość jest <= 450px oraz użytkownik jest na podstronie 'type/gatunek-gier' */

    if(window.innerWidth <= 450 && document.location.href.indexOf('type') > -1){

        footer.style.marginTop = 70 + "px";
    }

    /* dodanie marginesu górnego dla stopki kiedy rozdzielczość jest <= 450px oraz użytkownik jest na stronie głównej */

    if(window.innerWidth <= 450 && document.location.href.indexOf('index.html') > -1){

        footer.style.marginTop = 10 + "px";
    }
}

document.addEventListener('DOMContentLoaded', () => {

    const typeOfGame = document.querySelectorAll('.type-of-game');

    const games = {

        rts: typeOfGame[0],
        tpp: typeOfGame[1],
        adv: typeOfGame[2],
        fps: typeOfGame[3],
        eco: typeOfGame[4]
    }

    const {rts, tpp, adv, fps, eco} = games;
    const btn = [rts, tpp, adv, fps, eco];

    /* RWD dla uzytkonwika jeśli wejdzie na strone po przez urządzenie które ma mniejszą rozdzielczość niż 450px */

    forMobile(btn);

    window.addEventListener('resize', () => {

        const footer = document.querySelector('.footer');

        /* RWD dla uzytkonwika komputerowego, który być może będzie zmniejszał/zwiększał rozmiar okna*/

        if(window.outerWidth <= 450){

            btn[0].textContent = "RTS";
            btn[1].textContent = "TPP";
            btn[2].textContent = "ADV";
            btn[3].textContent = "FPS";
            btn[4].textContent = "ECO";
        }
        else{

            btn[0].textContent = "strategia";
            btn[1].textContent = "skradanki";
            btn[2].textContent = "przygodowe";
            btn[3].textContent = "strzelanki";
            btn[4].textContent = "ekonomiczne";
        }

        /* dla zakładki type */

        if(window.innerWidth <= 750 && document.location.href.indexOf('type') > -1){
    
            footer.style.marginTop = 95 + "px";
        }

        if(window.innerWidth >= 750 && document.location.href.indexOf('type') > -1){
    
            footer.style.marginTop = 10 + "px";
        }

        if(window.innerWidth <= 450 && document.location.href.indexOf('type') > -1){

            footer.style.marginTop = 70 + 'px';
        }

        /* dla zakładki index.html */

        if(window.innerWidth <= 750 && document.location.href.indexOf('index.html') > -1){

            footer.style.marginTop = 95 + 'px';
        }

        if(window.innerWidth >= 750 && document.location.href.indexOf('index.html') > -1){

            footer.style.marginTop = 10 + 'px';
        }

        if(window.innerWidth <= 450 && document.location.href.indexOf('index.html') > -1){

            footer.style.marginTop = 70 + 'px';
        }

    }, false)

    removePadding();
    addMarginToFooter();

}, false)