const mongoose = require("mongoose");
const Project = require("./models/project");

const projects = [
    {
        title: "Kitten 1",
        image: "/images/kitten.jpg",
        link: "About this kitten",
        description: "Hello There! I just wanted to say HI to you guys. See ya!"
    },
    {
        title: "Kitten 2",
        image: "/images/kitten2.jpg",
        link: "About this kitten 2",
        description: "Hello There! I just wanted to say HI to you guys. See ya!"
    },
    {
        title: "Kitten 3",
        image: "/images/kitten3.jpg",
        link: "About this kitten 3",
        description: "Hello There! I just wanted to say HI to you guys. See ya!"
    }
];

mongoose.connect('mongodb://localhost:27017/sit725', { useNewUrlParser: true, useUnifiedTopology: true });

Project.insertMany(projects)
    .then(() => {
        console.log("Data inserted successfully");
        mongoose.connection.close();
    })
    .catch(err => {
        console.log(err);
        mongoose.connection.close();
    });
