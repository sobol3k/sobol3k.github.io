function removePadding(){
    if(document.location.href.indexOf('kontakt.html') > -1){
        const article = document.querySelector('.article');
        return article.style.padding = 0;
    }
}

function addMarginWhenUserIsLocatedTypeGames(footer){
    if(window.innerWidth <= 750 && document.location.href.indexOf('type') > -1) footer.style.marginTop = 95 + "px";
    if(window.innerWidth >= 750 && document.location.href.indexOf('type') > -1) footer.style.marginTop = 10 + "px";
    if(window.innerWidth <= 450 && document.location.href.indexOf('type') > -1) footer.style.marginTop = 70 + 'px';
}

function addMarginWhenUserIsLocatedMainWebsite(footer){
    if(window.innerWidth <= 750 && document.location.href.indexOf('index.html') > -1) footer.style.marginTop = 95 + 'px';
    if(window.innerWidth >= 750 && document.location.href.indexOf('index.html') > -1) footer.style.marginTop = 10 + 'px'
    if(window.innerWidth <= 450 && document.location.href.indexOf('index.html') > -1) footer.style.marginTop = 70 + 'px';  
}

function addMarginToFooter(){
    if(document.location.href.indexOf('index.html') > -1 && window.outerWidth <= 750){
        const footer = document.querySelector('.footer');
        return footer.style.marginTop = 95 + 'px';
    }

    if(document.location.href.indexOf('index.html') > -1 && window.outerWidth <= 450) return footer.style.marginTop = 70 + 'px';
}

function forMobileDevices(btn){
    const footer = document.querySelector('.footer');

    /* RWD for user, if enter on the website via mobile device which has resolution of screen <= 450px */
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

    /* adding margin top for footer when resolution is <= 750px and user is located on subpage 'type/gatunek-gier' */
    if(window.innerWidth <= 750 && document.location.href.indexOf('type') > -1) footer.style.marginTop = 95 + "px";

    /* adding margin top for footer when resolution is <= 450px and user is located on subpage 'type/gatunek-gier' */
    if(window.innerWidth <= 450 && document.location.href.indexOf('type') > -1) footer.style.marginTop = 70 + "px";

    /* adding margin top for footer when resolution is <= 450px and user is located on main page */
    if(window.innerWidth <= 450 && document.location.href.indexOf('index.html') > -1) footer.style.marginTop = 10 + "px";
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

    /* RWD for user, if enter on the website via mobile device which has resolution of screen <= 450px */
    forMobileDevices(btn);

    window.addEventListener('resize', () => {
        const footer = document.querySelector('.footer');
        /* RWD for PC user, who will reduce or increase the size of the window */
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
        /* for zakładki type */
        addMarginWhenUserIsLocatedTypeGames(footer);
        /* for index.html */
        addMarginWhenUserIsLocatedMainWebsite(footer);
    })
    removePadding();
    addMarginToFooter();
})