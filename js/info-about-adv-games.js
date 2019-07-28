document.addEventListener('DOMContentLoaded', () => {
    const infoIcons = document.querySelectorAll('.fa-info');
    for(const info of infoIcons){
        info.addEventListener('click', () => {
            if(info.parentElement.firstElementChild.firstElementChild.alt.indexOf('Subnautica') > -1){
                createInfoWindow('Unknown Worlds Entertainment', ' Unknown Worlds Entertainment', 2018);
            } 
            else if(info.parentElement.firstElementChild.firstElementChild.alt.indexOf('Syberia III') > -1){
                createInfoWindow('Microids/Anuman Interactive', 'Microids/Anuman Interactive', 2017);
            }
            else if(info.parentElement.firstElementChild.firstElementChild.alt.indexOf('Alan Wake') > -1){
                createInfoWindow('Remedy Entertainment', 'THQ Nordic / Nordic Games', 2010);
            }
            else{
                createInfoWindow('Quantic Dream', 'Quantic Dream', 2018);
            }
        })
    }
})
