function changeWhenUserHasWindowUnder(tabImg, tabTitles){
    if(window.outerWidth <= 450){
        for(let i = 0; i<tabImg.length; i++){
            tabImg[i].innerHTML = tabTitles[i];
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const elementsWithImg = document.querySelectorAll('.logo-game');

    const title = [
        'Subnautica',
        'Syberia III',
        'Alan Wake',
        'Detroit: Become Human'
    ];

    changeWhenUserHasWindowUnder(elementsWithImg, title);

    window.addEventListener('resize', () => {
        const img = [
            '<img src="../img/przygodowe/subnautica.jpg" alt="Subnautica">',
            '<img src="../img/przygodowe/syberia3.jpg" alt="Syberia III">',
            '<img src="../img/przygodowe/alanWake.jpg" alt="Alan Wake">',
            '<img src="../img/przygodowe/detroitBecomeHuman.jpg" alt="Detroit: Become Human">'
        ]

        if(window.outerWidth <= 450){
            for(let i = 0; i<elementsWithImg.length; i++){
                elementsWithImg[i].innerHTML = title[i];
            }
        }
        else{
            for(let i = 0; i<elementsWithImg.length; i++){
                elementsWithImg[i].innerHTML = img[i];
            }
        }
    })
})