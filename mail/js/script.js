const mailList = ["lucapatola700943@gmail.com", "simonedurso50@gmail.com", "lauracorrado23@gmail.com", "alefarina4@gmail.com", "toccus.ilre@gmail.com"]

let mail = prompt("Inserisci la tua mail")
console.log(mail)

for (let i = 0; i < mailList.length; i++) {
    console.log(mailList[i])
    if (mailList[i].toLowerCase() === mail) {
        document.getElementById('mail-true').innerHTML = "La mail da te inserita è verificata"
    }
}