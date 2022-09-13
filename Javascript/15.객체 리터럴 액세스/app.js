const years = {2022: 'Good', 2020: 'Bad', birthDay: 1987};

// Good
console.log(years['2022']);

// Bad
console.log(years[2020]);

const home = {
    address: 'Seodaemoon',
    phoneNumber: '02-359-0123'
};

let address = 'Jongro';

// Seodaemoon, 02-359-0123
console.log(`${home.address}, ${home.phoneNumber}`);

// Jongro
console.log(address);
// undefined
console.log(home[address]);
// Seodaemoon
console.log(home[`address`]);

const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206'
};

//"64 Johnson Ave, Brooklyn, NY 11206"
let fullAddress = `${restaurant['address']}, ${restaurant['city']}, ${restaurant['state']} ${restaurant['zipcode']}`;

console.log(fullAddress);