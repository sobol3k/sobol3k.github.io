
document.addEventListener('DOMContentLoaded', function(){

    const xhr = new XMLHttpRequest();
    console.log(xhr);

    xhr.open('GET', '../text/about-site.txt', true);

    xhr.onload = function(){
        if(this.status = 200 && this.readyState === 4){
            const resposneTxt = this.responseText;
            const div = document.querySelector('.txt');
            div.textContent = resposneTxt;
        }
        else{
            console.log(this.status);
        }
    }
    xhr.send();
})