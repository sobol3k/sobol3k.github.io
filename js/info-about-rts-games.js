document.addEventListener('DOMContentLoaded', () => {
    const infoIcons = document.querySelectorAll('.fa-info');

    for(const info of infoIcons){
        info.addEventListener('click', () => {

            if(info.parentElement.firstElementChild.firstElementChild.alt.indexOf('Anno 1800') > -1){
                createInfoWindow('Blue Byte GmbH', 'Ubisoft', 2019);
            }
            else if(info.parentElement.firstElementChild.firstElementChild.alt.indexOf('Civilization VI') > -1){
                createInfoWindow('Firaxis Games', '2K Games', 2016);
            }
            else if(info.parentElement.firstElementChild.firstElementChild.alt.indexOf('Frostpunk') > -1){
                createInfoWindow('11 bit studios', '11 bit studios', 2018);
            }
            else{
                createInfoWindow('Blue Byte GmbH', 'Ubisoft', 2019);
            }
        })
    }
})
