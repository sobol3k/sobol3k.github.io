function forMobile(btn){

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

    /* dodanie marginesu górnego dla stopki kiedy rozdzielczość jest < 750px oraz użytkownik jest na podstronie 'type/gatunek-gier' */

    if(window.innerWidth <= 750 && document.location.href.indexOf('type') > -1){

            const footer = document.querySelector('.footer');
            footer.style.marginTop = "95" + "px";
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

        if(window.innerWidth <= 750 && document.location.href.indexOf('type') > -1){
    
                const footer = document.querySelector('.footer');
                footer.style.marginTop = "95" + "px";
        }

    }, false)

    /* usunięcie paddingu dla elementu article kiedy użytkownik jest na zakładce kontakt */

    if(document.location.href.indexOf('kontakt.html') > -1){

        const article = document.querySelector('.article');
        article.style.padding = 0;
    }

}, false)