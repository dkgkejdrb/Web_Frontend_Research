let phrase = prompt("What is this color?");

if (phrase === 'stop') {
    console.log('red');
} else if (phrase === 'slow') {
    console.log('yellow');
} else if (phrase === 'go') {
    console.log('green');
} else {
    console.log('purple');
}