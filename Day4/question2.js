const student = {
        name: "Helsinki",
        age: 24,
        projects: {
            diceGame: "Two player dice game using Javascript"
        }

    }
    //deconstruct object

const { name, age, projects } = student;
name;
age;
projects;
console.log(name);
console.log(age);
console.log(projects);