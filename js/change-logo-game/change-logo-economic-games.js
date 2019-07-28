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
        'The Sims 4',
        'Twierdza Krzyzowiec',
        'Farming Simulator 2019',
        'House Flipper'
    ];

    changeWhenUserHasWindowUnder(elementsWithImg, title);

    window.addEventListener('resize', () => {
        const img = [
            '<img src="../img/ekonomiczne/theSims4.jpg" alt="The Sims 4">',
            '<img src="../img/ekonomiczne/TwierdzaKrzyzowiec.jpg" alt="Twierdza Krzyzowiec">',
            '<img src="../img/ekonomiczne/farmingSimulator19.jpg" alt="Farming Simulator 2019">',
            '<img src="../img/ekonomiczne/houseFlipper.jpg" alt="House Flipper">'
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