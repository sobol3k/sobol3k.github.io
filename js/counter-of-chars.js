
document.addEventListener('DOMContentLoaded', () => {  
    const textareaField = document.querySelector('textarea[name="message"]');
    textareaField.addEventListener('keydown', (e) => {

        const counterContainer = document.querySelector('.counter').style.display = 'block';
        let counterSpanElement = document.querySelector('.counter-of-chars').innerHTML = `wiadomość liczy ${textareaField.value.length} znaków`;
    }, false)
}, false)