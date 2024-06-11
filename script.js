function letter(event) {
    event.preventDefault();

    let email = event.target.email.value;
    let emailValuePrint = document.createElement('p');
    let subcribedDiv = document.getElementById('subcribed');
    subcribedDiv.appendChild(emailValuePrint);

    let thankYouMessage = document.createElement('p');
    thankYouMessage.innerText = 'Thank you for subscribing!';
    subcribedDiv.appendChild(thankYouMessage);
    event.target.reset();

}







