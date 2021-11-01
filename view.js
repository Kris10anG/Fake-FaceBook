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
    let loginHtml = /*html*/`
    <h1 class="header">Velkommen til Kloroform og Ketamin AS</h1>
    <p> Her vil du fine ting om deg selv du kanskje ikke visste </p>

    <input type="text" placeholder="Username" value="${model.userCredentialsInput.username}" onchange="model.userCredentialsInput.username = this.value">
    <br>
    <input type="password" placeholder="password" value="${model.userCredentialsInput.password}" onchange="model.userCredentialsInput.password = this.value">
    <br> 
    
    <button onclick="checkUserCredentials()" class="btn">Login</button>
    `;
    return loginHtml;
}


function profileView(){
    
    let profileHtml = /*html*/`
    <div class="wrapper">
  <div class="box a">
  <h2 class="title"> ${model.app.loggedInUser.name} </h2>
  
  </div>

  <div class="box b" img src="${model.app.loggedInUser.background}">
  <img src="${model.app.loggedInUser.background}" width="250" height="200">
  </div>

  <div class="box c">
  <img src="${model.app.loggedInUser.profile}" width="250" height="400">
  
  </div>
  <div class="box d">
    <div class="box e">
    <p> Job: ${model.app.loggedInUser.job} </p>
    </div>
    <div class="box f">
    <p> Age: ${model.app.loggedInUser.age} </p>
    </div>
    <div class="box g">
    <p> Gender: ${model.app.loggedInUser.gender} </p>
    </div>
  </div>
</div>
    
    <div id="profileView">
   
   
    </div>
    `;
    return profileHtml;
    // let app = document.getElementById("app"); // IKKE BRUK DENNE HER MEN I VIEW SELECTOR  <--- denne skal også fjernes
    
    // let usernameInput = document.createElement("input"); // <-- 
    // var PWD = document.createElement("input"); // <-- 
    // var br = document.createElement("br");
    
    // usernameInput.setAttribute('type', "username");
    // usernameInput.setAttribute('value', model.userCredentialsInput.username);
    // PWD.setAttribute("name", "password");
    // PWD.setAttribute("placeholder", "Password");
    // PWD.setAttribute("type", model.userCredentialsInput.password);
    
    // PWD.onchange = function() {
    //     model.userCredentialsInput.password = PWD.value;
    // }
    // usernameInput.onchange = function() {
    //     // userLogin(usernameInput.value); // input value
    //     model.userCredentialsInput.username = usernameInput.value;
    // }
    
    // // Sette informasjon fra input til modellen
    // app.appendChild(usernameInput);
    // // app.appendChild(passwordInput);
    // app.appendChild(br);
    // app.appendChild(PWD);
    // let loginBtn = document.createElement("button");
    // loginBtn.innerHTML = "Login";
    // loginBtn.classList.add("button");
    
    // app.appendChild(loginBtn);
    
    // loginBtn.onclick = function() {
    //     checkUserCredentials();
    // }
    
    // return app.outerHTML;
}