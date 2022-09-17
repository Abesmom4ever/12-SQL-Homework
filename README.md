# 12 SQL: Employee Tracker

## User Story

```md
AS A business owner
USER WANTS to be able to view and manage the departments, roles, and employees in their company
SO THAT they can organize and plan their business
```

## Function

```md
GIVEN a command-line application that accepts user input
WHEN user starts the application
THEN user is presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN user chooses to view all departments
THEN user uis presented with a formatted table showing department names and department ids
WHEN user chooses to view all roles
THEN user is presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN user chooses to view all employees
THEN user is presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN user chooses to add a department
THEN user is prompted to enter the name of the department and that department is added to the database
WHEN user chooses to add a role
THEN user is prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN user chooses to add an employee
THEN user is prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN user chooses to update an employee role
THEN user is prompted to select an employee to update and their new role and this information is updated in the database
```

## Installation

```md
$ npm i
```

## Mock-Up

The following screenshot shows an example of the application being used from the command line:

![Mockup](./Assets/Screen%20Shot%202022-09-16%20at%2010.01.01%20PM.png)

## Links

Github Repo: https://github.com/Abesmom4ever/12-SQL-Homework

---

© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
