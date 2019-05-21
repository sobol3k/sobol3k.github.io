/* funkcje sprawdzające pola podczas zdarzenia typu submit */

function checkMail(mail){

    const mailValue = mail.value;

    if(mailValue.length < 10 || mailValue.lastIndexOf('@') === -1 || mailValue.lastIndexOf('.') === -1){

        return false;
    }
    else{

        return true;
    }
}

function checkName(name){

    const nameValue = name.value;

    if(nameValue.length < 3){

        return false;
    }
    else{

         return true;
    }
}

function checkSubject(subject){

    const subjectValue = subject.value;

    if(subjectValue.length < 10){

        return false;
    }
    else{

        return true;
    }

}

function checkMessage(message){

    const messageValue = message.value;

    if(messageValue.length < 10){

        return false;
    }
    else{

        return true;
    }
}

document.addEventListener('DOMContentLoaded', function(){

    const messageError = document.querySelector('.message-error');
    const btnReset = document.querySelector('#btn-reset');
    
    /* przywrócenie pól do ustawienień defaultowych */

    btnReset.addEventListener('click', function(){

        const inputFields = document.querySelectorAll('.el-form');

        for(const field of inputFields){

            field.style.backgroundColor = 'white';
        }
        
        const counterContainer = document.querySelector('.counter').style.display = 'none';
        counterOfChars = 0;

    }, false)

    const form = {

        name: document.querySelector('input[name="forename"]'),
        email: document.querySelector('input[name="email"]'),
        subject: document.querySelector('input[name="subject"]'),
        message: document.querySelector('textarea[name="message"]')
    }

    const {name, email, subject, message} = form;

    /* walidacja pól formularza na żywo */

    name.addEventListener('input', function(){

        if(name.value.length < 3){

            name.classList.add('bad');
        }
        else{

            name.classList.add('green');
        }

    }, false)

    email.addEventListener('input', function(){

        if(email.value.length < 10 || email.value.lastIndexOf('@') === -1 || email.value.lastIndexOf('.') === -1){

            email.classList.add('bad');
        }
        else{

            email.classList.add('green');
        }

    }, false)

    subject.addEventListener('input', function(){

        if(subject.value.length < 10){

            subject.classList.add('bad');
        }
        else{

            subject.classList.add('green');
        }

    }, false)

    message.addEventListener('input', function(){

        if(message.value.length < 10){

            message.classList.add('bad');
        }
        else{

            message.classList.add('green');
        }

    }, false)

    /* ewentualnie wyświetlenie informacji o błędzie wysyłki formularza w okienku popup */

    const contactForm = document.querySelector('form').addEventListener('submit', function(e){

        if(!checkName(name) || !checkMail(email) || !checkSubject(subject) || !checkMessage){

            e.preventDefault();

            const messageErrorStyle = getComputedStyle(messageError);
            let messageErrorStyleDisplayValue = messageErrorStyle.getPropertyValue('display');

            if(messageErrorStyleDisplayValue = "none"){

                messageError.style.display = "block";
                document.body.classList.add('opened-message-error');
            }
        }
        else{

            alert('Poprawnie wysłano wiadomość!');
        }
        
    }, false)

    /* wyłączanie okienka popup z powiadomieniem o błędzie wysyłki formularza */

    document.addEventListener('click', function(event){

        if(event.target.classList.contains('accepted-error')){

            messageError.style.display = "none";
            document.body.classList.remove('opened-message-error');
        }

    }, false)

}, false)