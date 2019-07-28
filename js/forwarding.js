document.addEventListener('DOMContentLoaded', () => {
    const forwardingBtn = document.querySelectorAll('.nav > .menu > li > a');
    for(let i=0; i<forwardingBtn.length; i++){
        forwardingBtn[i].addEventListener('click', (e) => {
            if(forwardingBtn[i].innerText === "Gry Online"){
                let counter = 3;
                const newElement = document.createElement('span');
                newElement.style.color = 'white';
                newElement.style.fontSize = (window.outerWidth <= 1000) ? 30 + 'px' : 50 + 'px';
                newElement.style.fontFamily = 'sans-serif';
                newElement.style.zIndex = '9999';
                newElement.style.display = 'block';
                newElement.style.position = 'fixed';
                newElement.style.top = '50' + '%';
                newElement.style.left = '50' + '%';
                newElement.style.transform = 'translate(-50%,-50%)';
                newElement.style.zIndex = 999;
                
                e.preventDefault();
                document.body.classList.add('opened-message-error');
                document.body.appendChild(newElement);

                setInterval(function(){
                    newElement.innerText = counter--;
                    if(counter === 0){
                        document.location = 'https://www.gry-online.pl';
                    }
                }, 1000);
            }
        })
    }
})