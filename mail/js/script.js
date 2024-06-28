const mailList = ["lucapatola700943@gmail.com", "simonedurso50@gmail.com", "lauracorrado23@gmail.com", "alefarina4@gmail.com", "toccus.ilre@gmail.com"]

let mail = prompt("Inserisci la tua mail")

let verification = false

for (let i = 0; i < mailList.length; i++) {
    if (mailList[i].toLowerCase() === mail) {
        verification = true
        document.getElementById('mail-true').innerHTML = "La mail da te inserita è verificata"
    }
}
if (verification === false) {
    document.getElementById('mail-false').innerHTML = "La mail da te inserita non è verificata"
}