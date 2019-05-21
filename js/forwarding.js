document.addEventListener('DOMContentLoaded', () => {

    const forwardingBtn = document.querySelectorAll('.nav > .menu > li > a');

    for(let i=0; i<forwardingBtn.length; i++){

        forwardingBtn[i].addEventListener('click', (e) => {

            if(forwardingBtn[i].innerText === "Gry Online"){
                
                e.preventDefault();
                document.body.classList.add('opened-message-error');

                const newElement = document.createElement('span');
                newElement.innerText = 'Za chwilę nastąpi przekierowanie na żądaną strone';
                newElement.style.color = 'white';
                newElement.style.fontSize = '40' + 'px';
                newElement.style.fontFamily = 'sans-serif';
                newElement.style.zIndex = '9999';
                newElement.style.display = 'block';
                newElement.style.position = 'fixed';
                newElement.style.top = '25' + '%';
                newElement.style.left = '50' + '%';
                newElement.style.transform = 'translate(-50%,-25%)';
                newElement.style.zIndex = 999;

                document.body.appendChild(newElement);

                setInterval(function(){

                    newElement.innerText += '.';

                    if(newElement.innerText.indexOf('...') > -1){

                        document.location = 'https://www.gry-online.pl';
                    }

                }, 3000);

            }

        }, false)

    }

}, false)