const model = {

    // app

    app: {
        currentPage: "Login",
        loggedInUser: {},
    },

    userCredentialsInput: {
        username: "Tomas",
        password: "forfatter",
    },

    users: [
        {
            username: "Bayan", password: "1234",
            userinformation: {
                name: "Bayan",
                age: 27,
                gender: "Male",
                profile: "",
                background: "syria.png",
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
            gender: "Male",
            profile: 'Tomas.png',
            background: "norge.png",
            job: "Author",
        }},
        { username: "Andreas", password: "ABC123" ,
        userinformation: {
            name: "Andreas",
            age: 19,
            gender: "Male",
            profile: "",
            background: "italia.png",
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