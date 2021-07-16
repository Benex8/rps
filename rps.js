function computerPlay() {
    let chars = [ "Rock", "Paper", "Scissors" ];
    return chars[ Math.floor(Math.random() * chars.length)];
 }
console.log(computerPlay());