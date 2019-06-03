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
        'Metro Exodus',
        'Apex Legends',
        'Far Cry 5',
        'Battlefield V'
    ];

    changeWhenUserHasWindowUnder(elementsWithImg, title);

    window.addEventListener('resize', () => {
        const img = [
            '<img src="../img/strzelanki/metroExodus.jpg" alt="Metro: Exodus">',
            '<img src="../img/strzelanki/apexLegends.jpg" alt="Apex Legends">',
            '<img src="../img/strzelanki/farCry5.jpg" alt="Far Cry 5">',
            '<img src="../img/strzelanki/battlefield5.jpg" alt="Battlefield V">'
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