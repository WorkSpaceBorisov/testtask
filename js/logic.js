let form = document.getElementById('myform');
form.addEventListener('submit', function (event) {
    event.preventDefault();
});

function submitAdd() {
    let table = document.getElementById('main-table'),
        name = document.getElementById('name').value,
        email = document.querySelector('#email').value,
        messageEmail = document.querySelector('.error-message-email'),
        messageName = document.querySelector('.error-message-name'),
        validate = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (name.toString() === '' || name.toString().match(/[а-яА-я]/i)) {
        messageName.innerHTML = 'Name is not valid';
        messageName.style = 'display: block';
        return;
    }

    if (email.toString() === '') {
        messageEmail.innerHTML = 'Email field required';
        messageEmail.style = 'display: block';
        return;
    }

    for (let elem of table.querySelectorAll('td')) {
        if (
            (elem.innerHTML.toString().toLowerCase().includes(email.toString().toLowerCase()) === true) ||
            !validate.test(email)
        ) {
            messageEmail.innerHTML = 'Email already exists';
            messageEmail.style = 'display: block';
            return;
        }
    }
    messageEmail.style = 'display: none';
    messageName.style = 'display: none';

    let newRow = table.insertRow(table.rows.length);
    let today = new Date();
    newRow.insertCell(0).innerHTML = table.rows.length - 1;
    newRow.insertCell(1).innerHTML = name.toString();
    newRow.insertCell(2).innerHTML = email.toString();
    newRow.insertCell(3).innerHTML = today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear();


}