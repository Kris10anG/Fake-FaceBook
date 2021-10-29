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
                alert("Velkommen inn mein fürer")
                console.log("successful login");
                loginSuccess = true;
                model.app.loggedInUser = user.username;

                model.app.currentPage = "Profile";
                viewSelector();
            } 
        }
    });
}