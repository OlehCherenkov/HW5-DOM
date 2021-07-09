function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if(!username || !password) {
        showAlert('Incorrect username or password', true);
        return false;
    }
    const userData = {
        username,
        password
    }
    showAlert(userData);
    saveUserData(userData);
}

function showAlert(data, error = null) {
    const alertBlock = document.getElementById('alert');
    if(error) {
        alertBlock.innerHTML = `<div class="alert error">${data}</div>`;
        return false;
    }
    alertBlock.innerHTML = `<div class="alert">username: ${data.username}<br>password: ${data.password}</div>`;
}

function saveUserData(data) {
    localStorage.setItem('user', JSON.stringify(data));
}
