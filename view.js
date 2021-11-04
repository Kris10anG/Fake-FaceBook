function viewSelector() {
    let html = ``;
    
    const app = document.getElementById('app'); 

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
    <h1 class="header" >Velkommen til din profil </h1>
    

    <p> Usernames: Tomas,  Bayan, Andreas </p>
    <p> password: forfatter, 1234, pizza </p>
    

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
  
  <div id="profileView"></div>

  </div>
  `;
  return profileHtml;
}