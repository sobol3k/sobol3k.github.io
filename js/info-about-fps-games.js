document.addEventListener('DOMContentLoaded', () => {
    const infoIcons = document.querySelectorAll('.fa-info');
    for(const info of infoIcons){
        info.addEventListener('click', () => {
            if(info.parentElement.firstElementChild.firstElementChild.alt.indexOf('Metro: Exodus') > -1){
                createInfoWindow('4A Games', 'Deep Silver / Koch Media', 2019);
            }
            else if(info.parentElement.firstElementChild.firstElementChild.alt.indexOf('Apex Legends') > -1){
                createInfoWindow('Respawn Entertainment', 'Electronic Arts Inc.', 2019);
            }
            else if(info.parentElement.firstElementChild.firstElementChild.alt.indexOf('Far Cry 5') > -1){
                createInfoWindow('Ubisoft', 'Ubisoft', 2018);
            }
            else{
                createInfoWindow('EA DICE / Digital Illusions CE', 'Electronic Arts Inc.', 2018);
            }
        })
    }
})
