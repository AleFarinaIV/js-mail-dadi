const button = document.getElementById('button');

button.addEventListener('click', function () {
    let user = Math.floor(Math.random() * 6 + 1)
    let computer = Math.floor(Math.random() * 6 + 1)
    console.log(user, computer)
    if (user > computer) {
        document.getElementById('userWin').innerHTML = "Complimenti hai vinto"
    }
})