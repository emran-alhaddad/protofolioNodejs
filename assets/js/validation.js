function validateName() {

    var name = document.getElementById('contact-name').value;
    //validate it's not empty 
    if (name.length == 0) {

        producePrompt('Name is required', 'name-error', 'red')
        return false;

    }

    //validate name leangth  ?
    if (!name.length > 3 || name.length < 9) {

        producePrompt('write name more than 3 leteers and less than 10  , please.', 'name-error', 'red');
        return false;

    }

    producePrompt('Valid', 'name-error', 'green');
    return true;

}

// 

// 

function validateEmail() {

    var email = document.getElementById('contact-email').value;

    if (email.length == 0) {

        producePrompt('Email Invalid', 'email-error', 'red');
        return false;

    }

    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {

        producePrompt('Email Invalid', 'email-error', 'red');
        return false;

    }

    producePrompt('Valid', 'email-error', 'green');
    return true;

}

function validateMessage() {
    var message = document.getElementById('contact-message').value;
    var required = 20;
    var left = required - message.length;

    if (left > 0) {
        producePrompt(left + ' more characters required', 'message-error', 'red');
        return false;
    }

    producePrompt('Valid', 'message-error', 'green');
    return true;

}







function validateForm() {
    if (!validateName() || !validateEmail() || !validateMessage()) {
        jsShow('submit-error');
        producePrompt('Please fix errors to submit.', 'submit-error', 'red');
        setTimeout(function() {
            jsHide('submit-error');
        }, 2000);
        return false;
    } else {

    }
}

function jsShow(id) {
    document.getElementById(id).style.display = 'block';
}

function jsHide(id) {
    document.getElementById(id).style.display = 'none';
}


function producePrompt(message, promptLocation, color) {

    document.getElementById(promptLocation).innerHTML = message;
    document.getElementById(promptLocation).style.color = color;

    function validateName() {

        var name = document.getElementById('contact-name').value;
        //validate it's not empty 
        if (name.length == 0) {

            producePrompt('Name is required', 'name-error', 'red')
            return false;

        }

        //validate name leangth  ?
        if (!name.length > 3 || name.length < 9) {

            producePrompt('write name more than 3 leteers and less than 10  , please.', 'name-error', 'red');
            return false;

        }

        producePrompt('Valid', 'name-error', 'green');
        return true;

    }

    // 

    // 

    function validateEmail() {

        var email = document.getElementById('contact-email').value;

        if (email.length == 0) {

            producePrompt('Email Invalid', 'email-error', 'red');
            return false;

        }

        if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {

            producePrompt('Email Invalid', 'email-error', 'red');
            return false;

        }

        producePrompt('Valid', 'email-error', 'green');
        return true;

    }

    function validateMessage() {
        var message = document.getElementById('contact-message').value;
        var required = 20;
        var left = required - message.length;

        if (left > 0) {
            producePrompt(left + ' more characters required', 'message-error', 'red');
            return false;
        }

        producePrompt('Valid', 'message-error', 'green');
        return true;

    }







    function validateForm() {
        if (!validateName() || !validateEmail() || !validateMessage()) {
            jsShow('submit-error');
            producePrompt('Please fix errors to submit.', 'submit-error', 'red');
            setTimeout(function() {
                jsHide('submit-error');
            }, 2000);
            return false;
        } else {

        }
    }

    function jsShow(id) {
        document.getElementById(id).style.display = 'block';
    }

    function jsHide(id) {
        document.getElementById(id).style.display = 'none';
    }


    function producePrompt(message, promptLocation, color) {

        document.getElementById(promptLocation).innerHTML = message;
        document.getElementById(promptLocation).style.color = color;

    }
}