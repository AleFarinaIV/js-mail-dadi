const button = document.getElementById('button');

button.addEventListener('click', function () {
    let user = Math.floor(Math.random() * 6 + 1)
    let computer = Math.floor(Math.random() * 6 + 1)
    console.log(user, computer)
    if (user > computer) {
        document.getElementById('userMessage').innerHTML = "Complimenti hai vinto!!"
        document.getElementById('cpuMessage').innerHTML = "Error 404 NoT FounD"
        document.getElementById('draw').innerHTML = ""
    }else if (user < computer) {
        document.getElementById('userMessage').innerHTML = "Mi dispiace, ha vinto il computer :("
        document.getElementById('cpuMessage').innerHTML = "Hai vinto contro l'utente!!"
        document.getElementById('draw').innerHTML = ""
    }else {
        document.getElementById('userMessage').innerHTML = ""
        document.getElementById('cpuMessage').innerHTML = ""
        document.getElementById('draw').innerHTML = "SIETE RIUSCITI A PAREGGIARE!!"
    }
})