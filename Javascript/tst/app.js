class user {

    constructor(name) {
        this.name = name;
    }
    sayNme = () => {
        console.log('say', this.name);
    }
}

const people = new user('lee');

people.sayNme();


let numbers = [];
let mapee = [1, 2, 3, 4, 5];

numbers = mapee.map((el)=>{
    return el*2;
})

console.log(numbers);