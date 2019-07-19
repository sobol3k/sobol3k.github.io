document.addEventListener('DOMContentLoaded', () => {
    const infoIcons = document.querySelectorAll('.fa-info');

    for(const info of infoIcons){
        info.addEventListener('click', () => {

            if(info.parentElement.firstElementChild.firstElementChild.alt.indexOf('The Sims 4') > -1){
                createInfoWindow('EA Maxis / Maxis Software', 'Electronic Arts Inc.', 2014);
            }
            else if(info.parentElement.firstElementChild.firstElementChild.alt.indexOf('Twierdza Krzyzowiec') > -1){
                createInfoWindow('FireFly Studios', 'Take 2 Interactive', 2002);
            }
            else if(info.parentElement.firstElementChild.firstElementChild.alt.indexOf('Farming Simulator 2019') > -1){
                createInfoWindow('GIANTS Software', 'Focus Home Interactive', 2018);
            }
            else{
                createInfoWindow('Empyrean', 'PlayWay', 2018);
            }
        })
    }
})
