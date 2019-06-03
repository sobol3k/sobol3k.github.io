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
        'Assassins Creed Odyssey',
        'Dishonored',
        'Hitman 2',
        'Sekiro: Shadow Die Twice'
    ];

    changeWhenUserHasWindowUnder(elementsWithImg, title);

    window.addEventListener('resize', () => {
        const img = [
            '<img src="../img/skradanki/assasinsCreedOdyssey.jpg" alt="Assassins Creed Odyssey">',
            '<img src="../img/skradanki/dishonored.jpg" alt="Dishonored">',
            '<img src="../img/skradanki/hitman2.jpg" alt="Hitman 2">',
            '<img src="../img/skradanki/sekiroShadowDieTwice.jpg" alt="Sekiro: Shadow Die Twice">'
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