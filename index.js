const inquirer = require('inquirer');
const fs = require('fs');


inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your Name?',
            name: 'username',
        },

    ])
    .then((response) => {
        console.log(response)
    });



    // fs.readFile('template.html', 'utf-8', (err, data)) =>

    // fs.writeFile('index.html', JSON.stringify(response, null, 4), (err) => {
    //     if (err) {
    //         throw err
    //     }
    //     console.log("YAY")
    // })