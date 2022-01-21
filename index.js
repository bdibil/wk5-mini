const inquirer = require('inquirer');
const fs = require('fs');

let userData = []


inquirer
.prompt([
    {
            type: 'input',
            message: 'What is your Name?',
            name: 'username',
        },
        
    ])
    .then((response) => {
        fs.readFile('test.txt', 'utf-8', (err, data) => {
            if (err) {
                throw err
            }
            userData = data
            // console.log(userData)
        })

        fs.appendFile('test.txt', `\n${response.username}`, (err) => {
            if (err) {
                throw err
            }
        })

        // console.log("==========")
        // console.log(response.username)
    });



    // function writeInfo(data){


    // }



    // fs.readFile('template.html', 'utf-8', (err, data)) =>

    // fs.writeFile('index.html', JSON.stringify(response, null, 4), (err) => {
    //     if (err) {
    //         throw err
    //     }
    //     console.log("YAY")
    // })