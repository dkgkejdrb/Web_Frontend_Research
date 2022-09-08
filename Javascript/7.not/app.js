const password = parseInt(prompt('Input password'));

if (!(password)) {
    console.log('Do not make password empty!');
    password = parseInt(prompt('Input your password again!'));
}


const age = parseInt(prompt('Age?'));

if (!(age >= 0 && age < 6 || age > 65)) {
    console.log('You are not a baby or a senior!');
}