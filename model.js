const model = {

    // app

    app: {
        currentPage: "Login",
        loggedInUser: null,
    },

    userCredentialsInput: {
        username: "X",
        password: "PasswordX",
},

    users: [
        {username:"B", password:"1234"}, // true -> exite her
        {username:"K", password:"123", admin: true}, // failed
        {username: "Tomas", password: "forfatter"},
        {username: "John Espen", password: "joakim"},
    ]
}