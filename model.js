const model = {

    // app

    app: {
        currentPage: "Login",
        loggedInUser: {},
    },

    userCredentialsInput: {
        username: "",
        password: "",
    },

    users: [
        {
            username: "B", password: "1234",
            userinformation: {
                name: "Kristian",
                age: 19,
                gender: "XXAttackHelicopter",
                profilePic: "heli.gif",
            }
        }, // true -> exite her
        {
            username: "K", password: "123", admin: true,
            userinformation: {
                name: "Kristian",
                age: 19,
                gender: "XXAttackHelicopter"
            }
        }, // failed
        { username: "Tomas", password: "forfatter" ,
        userinformation: {
            name: "Tomas",
            age: 25,
            gender: "Boomer",
        }},
        { username: "John Espen", password: "joakim" },
        { username: "Henrik", password: "Anders" },
        { username: "Andreas", password: "pizza" },
        { username: "Anders", password: "evo" },
    ]
}