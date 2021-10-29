function viewSelector() {
    let html = ``;
    // html = navBar();
    const app = document.getElementById('app'); // bare her

    switch (model.app.currentPage) {
        case 'Login':
            html += loginView();
           break;
        case 'Profile':
            html += profileView();
           break;
        default:
            html = "noPageFound  "
    }
    app.innerHTML = html;
}

function loginView() {
    let header = document.createElement("h1");
    header.classList.add("header");
    header.innerHTML = "Velkommen til Kloroform og Ketamin AS";

    app.appendChild(header);

    let usernameInput = document.createElement("input"); // <-- 
    var PWD = document.createElement("input"); // <-- 
    var br = document.createElement("br");
    
    usernameInput.setAttribute('type', "username");
    usernameInput.setAttribute('value', model.userCredentialsInput.username);
    PWD.setAttribute("name", "password");
    PWD.setAttribute("placeholder", "Password");
    PWD.setAttribute("type", model.userCredentialsInput.password);
    
    PWD.onchange = function() {
        model.userCredentialsInput.password = PWD.value;
    }
    usernameInput.onchange = function() {
        // userLogin(usernameInput.value); // input value
        model.userCredentialsInput.username = usernameInput.value;
    }
    
    // Sette informasjon fra input til modellen
    app.appendChild(usernameInput);
    // app.appendChild(passwordInput);
    app.appendChild(br);
    app.appendChild(PWD);
    let loginBtn = document.createElement("button");
    loginBtn.innerHTML = "Login";
    loginBtn.classList.add("button");
    
    app.appendChild(loginBtn);
    
    loginBtn.onclick = function() {
        checkUserCredentials();
    }

    return app.outerHTML;
}

function profileView(){
    let app = document.getElementById("app"); // IKKE BRUK DENNE HER MEN I VIEW SELECTOR  <--- denne skal også fjernes
    let header = document.createElement("h1");
    header.classList.add("header");
    header.innerHTML = "Velkommen til PROFILE";

    app.appendChild(header);

    let usernameInput = document.createElement("input"); // <-- 
    var PWD = document.createElement("input"); // <-- 
    var br = document.createElement("br");
    
    usernameInput.setAttribute('type', "username");
    usernameInput.setAttribute('value', model.userCredentialsInput.username);
    PWD.setAttribute("name", "password");
    PWD.setAttribute("placeholder", "Password");
    PWD.setAttribute("type", model.userCredentialsInput.password);
    
    PWD.onchange = function() {
        model.userCredentialsInput.password = PWD.value;
    }
    usernameInput.onchange = function() {
        // userLogin(usernameInput.value); // input value
        model.userCredentialsInput.username = usernameInput.value;
    }
    
    // Sette informasjon fra input til modellen
    app.appendChild(usernameInput);
    // app.appendChild(passwordInput);
    app.appendChild(br);
    app.appendChild(PWD);
    let loginBtn = document.createElement("button");
    loginBtn.innerHTML = "Login";
    loginBtn.classList.add("button");
    
    app.appendChild(loginBtn);
    
    loginBtn.onclick = function() {
        checkUserCredentials();
    }

    return app.outerHTML;
}