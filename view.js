function show() {
    let app = document.getElementById("app");
    let header = document.createElement("h1");
    header.classList.add("header");
    header.innerHTML = "Velkommen til Kloroform og Ketammin AS";

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
        if (model.userCredentialsInput.username === model.users[1].username && model.userCredentialsInput.password  === model.users[1].password) {
            alert("Halla");
            
        } 
    }

    
}