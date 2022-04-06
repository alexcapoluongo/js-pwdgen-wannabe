// Chiedi all’utente il suo nome
const userName = prompt('scrivi il tuo nome');

// poi chiedi il suo cognome
const userSurname = prompt('scrivi il tuo cognome');

// poi chiedi il suo colore preferito
const userColor = prompt('scrivi il tuo colore preferito');

// genera password nomecognomecolorepreferito21
const message = `La tua password è ${userName}${userSurname}${userColor}`;
document.getElementById("my-text").innerHTML = message + 21;