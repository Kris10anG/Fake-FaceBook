function userLogin() { // value fra view sin input
 // 
}

function checkUserCredentials(usernameInput, passwordInput) {
    users.forEach(user => {
        if (usernameInput === user.name) {
            if (passwordInput === user.password) {
                console.log("successful login")
            }
        }
        else console.log("Login failed");
    });
}