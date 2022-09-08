let age = parseInt(prompt("Age :"));

if (age < 5) {
    console.log("You are a baby. You get in for free!");
} else if (age < 10) {
    console.log("You are a child. You pay $10");
} else if (age < 65) {
    console.log("You are an adult. You pay $20");
} else {
    console.log("You are a senior. You pay $10");
}