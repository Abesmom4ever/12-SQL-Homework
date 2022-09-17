const connection = require("./connection");
const inquirer = require("inquirer");
const { listenerCount } = require("process");

console.log("Welcome to the console.");

//selects all tables
connection
    .promise()
    .query(
        `SELECT *
FROM information_schema.tables
WHERE table_schema = '${process.env.DB_NAME}'
AND table_name = 'departments'`,
    )
    .then((res) => {
        console.log(res);
        //prompts the user to choose to create dept or view dept
        inquirer
            .prompt([
                {
                    type: "list",
                    name: "action",
                    message: "What would you like to do?",
                    choices: ["View all departments", "Create a department"],
                },
            ])
            .then((res) => {
                console.log(res);
                switch (res.action) {
                    case "Create a department":
                        //when user chooses to create a dept, they are prompted to name the dept
                        inquirer
                            .prompt([
                                {
                                    type: "input",
                                    name: "name",
                                    message:
                                        "What is the name of the department?",
                                },
                            ])
                            .then((res) => {
                                connection.promise().query(`
                            INSERT INTO departments (name)
                            VALUES ("${res.name}")`);
                            });
                }
            });
    })
    .catch((err) => {
        console.log(err);
        // connection
        //     .promise()
        //     .query(
        //         `
        // CREATE DATABASE ${process.env.DB_NAME}
        // `,
        //     )
        //     .then((res) => {
        //         console.log("We created you a database!");
        //         connection
        //             .promise()
        //             .query(
        //                 `SELECT *
        //             FROM information_schema.tables
        //             WHERE table_schema = '${process.env.DB_NAME}'
        //             AND table_name = 'departments'`,
        //             )
        //             .then((res) => {
        //                 console.log(res);
        //             })
        //             .catch((err) => {
        //                 console.log(err);
        //             });
        //     });
    });
