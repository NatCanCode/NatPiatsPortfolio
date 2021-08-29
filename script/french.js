function salutations() {
    if (new Date().getHours() >= 2 && new Date().getHours() < 12) {
        salutations = "Hey, bonjour !<br>Je suis Nathalie.";
    } else if (new Date().getHours() >= 12 && new Date().getHours() < 18) {
        salutations = "Hey, bon après-midi !<br>Je suis Nathalie.";
    } else {
        salutations = "Hey, bonsoir !<br>Je suis Nathalie.";
    }
    // careful with security issues using innerHTML (user input only?)
    document.getElementById("salutations").innerHTML = salutations;
}
salutations();

// console.log(++[[]][+[]]+[+[]]);
// outputs 10