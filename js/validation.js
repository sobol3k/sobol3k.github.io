/* functions to check data from user when submit a form */
function checkName(name){
    const nameValue = name.value;
    const nameReg = new RegExp("^[a-zA-Z]{3,}$");

    if(nameReg.test(nameValue)){
        return true;
    }
    else{
        return false;
    }
}

function checkMail(email){
    const mailValue = email.value;
    const mailReg = new RegExp("^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-{2,}]+\.[a-zA-Z]{2,3}$");

    if(mailReg.test(mailValue)){
        return true;
    }
    else{
        return false;
    }
}

function checkSubject(subject){
    const subjectValue = subject.value;

    if(subjectValue.length < 5){
        return true;
    }
    else{
        return false;
    }
}

function checkMessage(message){
    const messageValue = message.value;

    if(messageValue.length < 10){
        return true;
    }
    else{
        return false;
    }
}

document.addEventListener('DOMContentLoaded', function(){
    const messageError = document.querySelector('.message-error');
    const btnReset = document.querySelector('#btn-reset');
    
    /* set default settings of inputs when user click reset form */
    btnReset.addEventListener('click', function(){
        const inputFields = document.querySelectorAll('.el-form');
        for(const field of inputFields){
            field.style.backgroundColor = 'white';
        }
        const counterContainer = document.querySelector('.counter').style.display = 'none';
        counterOfChars = 0;
    })

    const form = {
        name: document.querySelector('input[name="forename"]'),
        email: document.querySelector('input[name="email"]'),
        subject: document.querySelector('input[name="subject"]'),
        message: document.querySelector('textarea[name="message"]')
    }

    /* destructuring */
    const {name, email, subject, message} = form;

    /* live validation data from user */
    name.addEventListener('input', function(){
        if(!checkName(name)){
            name.classList.add('bad');
        }
        else{
            name.classList.add('green');
        }
    })

    email.addEventListener('input', function(){
        if(!checkMail(email)){
            email.classList.add('bad');
        }
        else{
            email.classList.add('green');
        }
    })

    subject.addEventListener('input', function(){
        if(checkSubject(subject)){
            subject.classList.add('bad');
        }
        else{
            subject.classList.add('green');
        }
    })

    message.addEventListener('input', function(){
        if(checkMessage(message)){
            message.classList.add('bad');
        }
        else{
            message.classList.add('green');
        }   
    })

    /* show error when data is not correct */
    const contactForm = document.querySelector('form').addEventListener('submit', function(e){
        if(!checkName(name) || !checkMail(email) || checkSubject(subject) || checkMessage(message)){
            const messageErrorStyle = getComputedStyle(messageError);
            if(messageErrorStyle.getPropertyValue('display') === "none"){
                messageError.style.display = "block";
                document.body.classList.add('opened-message-error');
            }
            e.preventDefault();
        }
        else{
            alert('Wiadomość została wysłana poprawnie!');
        }
    })
    
    /* close the popup with information about error of submit a form */
    document.addEventListener('click', function(event){
        if(event.target.classList.contains('accepted-error')){
            messageError.style.display = "none";
            document.body.classList.remove('opened-message-error');
        }
    })
})