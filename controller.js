function userLogin() { // value fra view sin input
 // 
}

function checkUserCredentials() {

    let usernameInput = model.userCredentialsInput.username;
    let passwordInput = model.userCredentialsInput.password;

    model.users.forEach(user => {
        let loginSuccess = false;
        // if(loginSuccess) return;
        if (usernameInput === user.username && passwordInput === user.password){
            // if (passwordInput === user.password)
             {
                model.app.loggedInUser = user.userinformation;
                model.app.currentPage = "Profile";
                viewSelector();
            } 
        }
    });
}