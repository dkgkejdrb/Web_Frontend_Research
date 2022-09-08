// 0-5 free
// 6-10 $10
// 11-65 $20
// 65+ free

const age = parseInt(prompt('Age?'));

if (age >= 0 && age < 6 || age >= 66) {
    console.log('free');
} else if (age >= 6 && age < 11) {
    console.log('10$');
} else if (age >= 11 && age < 66) {
    console.log('20$');
} else {
    console.log('INVALID');
}