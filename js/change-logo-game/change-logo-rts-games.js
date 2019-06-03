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
        'ANNO 1800',
        'Civilization VI',
        'Frostpunk',
        'The Settlers'
    ];

    changeWhenUserHasWindowUnder(elementsWithImg, title);

    window.addEventListener('resize', () => {
        const img = [
            '<img src="../img/strategiczne/anno.jpg" alt="Anno 1800">',
            '<img src="../img/strategiczne/civilization.jpg" alt="Civilization VI">',
            '<img src="../img/strategiczne/frostpank.jpg" alt="Frostpunk">',
            '<img src="../img/strategiczne/theSettlers.jpg" alt="The Settlers">'
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