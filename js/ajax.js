
document.addEventListener('DOMContentLoaded', function(){

    const xhr = new XMLHttpRequest();
    console.log(xhr);

    xhr.open('GET', '../txt/about-site.txt', true);

    xhr.onload = function(){
        if(this.status = 200 && this.readyState === 4){
            const resposneTxt = this.responseText;
            const txtDiv = document.querySelector('.txt');

            txtDiv.textContent = resposneTxt;
        }
        else{
            console.log(this.status);
        }
    }
    xhr.send();
})