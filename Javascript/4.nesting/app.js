const password = prompt('please enter a new password');

// Password must be 6+ characterse
if (password.length >= 6) {
    // Password cannot include space
    if (password.indexOf(' ') === -1) {
        console.log('Complete!');
    }
    else {
        console.log('Your password contains empty space.')
    }
}
else {
    console.log('It is too short!');
}
