
document.addEventListener('DOMContentLoaded', () => {
    const infoIcons = document.querySelectorAll('.fa-info');

    for(const info of infoIcons){
        info.addEventListener('click', () => {
            
            if(info.parentElement.firstElementChild.firstElementChild.alt.indexOf('Assassins Creed Odyssey') > -1){
                createInfoWindow('Ubisoft', 'Ubisoft', 2018);
            }
            else if(info.parentElement.firstElementChild.firstElementChild.alt.indexOf('Dishonored') > -1){
                createInfoWindow('Arkane Studios', 'Bethesda Softworks', 2012);
            }
            else if(info.parentElement.firstElementChild.firstElementChild.alt.indexOf('Hitman 2') > -1){
                createInfoWindow('IO Interactive', 'Warner Bros. Interactive Entertainment', 2018);
            }
            else{
                createInfoWindow('FromSoftware', 'Activision Blizzard', 2019);
            }
        })
    }
})