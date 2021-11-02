const model = {

    // app

    app: {
        currentPage: "Login",
        loggedInUser: {},
    },

    userCredentialsInput: {
        username: "Fredrik",
        password: "stein",
    },

    users: [
        {
            username: "B", password: "1234",
            userinformation: {
                name: "Kristian",
                age: 19,
                gender: "XXAttackHelicopter",
                profile: "box c",
                background: "box b",
            }
        }, // true -> exite her
        {
            username: "K", password: "123", admin: true,
            userinformation: {
                name: "Kristian",
                age: 19,
                gender: "XXAttackHelicopter",
                profile: "Helli.png",
                background: "Walter.png"
            }
        }, // failed
        { username: "Tomas", password: "forfatter" ,
        userinformation: {
            name: "Tomas",
            age: 25,
            gender: "Shemale",
            profile: 'Tomas.png',
            background: "pride.png",
            job: "author",
        }},
        { username: "John Espen", password: "joakim" ,
        userinformation: {
            name: "Tomas",
            age: 25,
            gender: "Shemale",
            src: "",
        }},

        { username: "Henrik", password: "Anders" ,
        userinformation: {
            name: "Tomas",
            age: 25,
            gender: "Boomer",
            src: "",
        }},
        { username: "Andreas", password: "pizza" ,
        userinformation: {
            name: "Tomas",
            age: 25,
            gender: "Boomer",
            src: "",
        }},
        { username: "Anders", password: "evo" ,
        userinformation: {
            name: "Anders",
            age: 18,
            gender: "Male",
            profile: 'anders.png',
            background: "pride.png",
            job: "electrician",
        }},
        { username: "Fredrik", password: "stein",
        userinformation: {
            name: "Fredrik",
            age: 18,
            gender: "Male",
            profile: "fredrik.png",
            background: "trans.png",
            job: "CEO of Frysekompaniet"

        }}
    ]
}