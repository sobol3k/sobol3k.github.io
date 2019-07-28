document.addEventListener('DOMContentLoaded', function(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '../text/about-site.txt', true);
    xhr.onload = function(){
        if(this.status = 200 && this.readyState === 4){
            const resposneTxt = this.responseText;
            const paragraph = document.querySelector('.about-site');
            paragraph.textContent = resposneTxt;
        }
        else{
            console.error('Upsss... coś poszło nie tak, status: ' + this.status);
        }
    }
    xhr.send();
})
