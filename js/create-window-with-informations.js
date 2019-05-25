function createInfoWindow(manufacturer, publisher, yearOfProduction){

    const windowInfo = document.createElement('div');
    windowInfo.classList.add('window-info');
    windowInfo.style.position = 'fixed';
    windowInfo.style.top = 5 + '%';
    windowInfo.style.left = 50 + '%';
    windowInfo.style.padding = 10 + 'px';
    windowInfo.style.transform = 'translate(-50%,-5%)';
    windowInfo.style.width = (window.outerWidth <= 430) ? 300 + 'px' : 400 + 'px';
    windowInfo.style.height = (window.outerWidth <= 430) ? 150 + 'px' : 200 + 'px';
    windowInfo.style.border = '3px solid gray';
    windowInfo.style.borderRadius = 8 + 'px';
    windowInfo.style.fontSize = (window.outerWidth <= 430) ? 12 + 'px' : 15 + 'px';
    windowInfo.style.zIndex = '1';
    windowInfo.style.backgroundColor = 'white';
    windowInfo.innerHTML = `<h1 style="text-align: center;">informacje</h1>
                            <span style="position: absolute; top: 5%; left: 2%;">ESC (wyjście)</span>
                            <span class="close-window"></span>
                            <div class="info-box">
                                <div style="margin-bottom: 25px;">
                                    <strong>Producent: ${manufacturer} </strong>
                                </div>
                                <div style="margin-bottom: 25px;">
                                    <strong>Wydawca: ${publisher} </strong>
                                </div>
                                <div>
                                    <strong>Rok produkcji: ${yearOfProduction} </strong>
                                </div>
                            </div>`;

    document.addEventListener('click', (e) => {

        if(e.target.classList.contains('close-window')){

            document.body.removeChild(windowInfo);
        }

    }, false)


    document.addEventListener('keyup', (e) => {

        if(e.keyCode === 27){

            document.body.removeChild(windowInfo);
        }

    }, false)

    document.body.appendChild(windowInfo);
}