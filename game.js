
const boxes = document.querySelectorAll(".boxes");
const users = document.querySelectorAll(".users");
const ending = document.querySelector(".pop-up");
const player1name = document.querySelector(".pop-up-1")
const player2name = document.querySelector(".pop-up-2")
const player = document.querySelectorAll(".pop-up p");
const username = document.querySelectorAll(".player");
const starting = document.querySelector(".starting")
const Startbtn = document.querySelector(".startbtn");
let player1;
let player2;
let patterns = ["", "", "", "", "", "", "", "", ""];
let click = 0;
let btn = document.querySelector(".pop-up-btn");


// #onclick tic - tac -toe 

boxes.forEach(function (value, x) {
    value.addEventListener("click", function () {
        let first = 0;
        if (click % 2 == 0 && value.innerHTML == "") {
            value.innerHTML = "x";
            patterns[x] = "x";
            click++;
        }
        else if (click % 2 != 0 && value.innerHTML == "") {
            value.innerHTML = "o";
            patterns[x] = "o";

            click++;
        }
        first++;
    })
})



// # turn of user 

users[0].setAttribute("style", "background-color:green ; color:white; border:2px solid gray");
boxes.forEach(function (value) {
    value.addEventListener("click", function () {
        for (let x = 0; x < users.length; x++) {
            users[x].setAttribute("style", "background-color:white; color:black ; border:2px solid white")
        }
        if (click % 2 == 0) {
            users[0].setAttribute("style", "background-color:green ; color:white; border:2px solid gray");
            users[1].setAttribute("style", "background-color:white; color:black ; border:2px solid white");
        }
        else {
            users[0].setAttribute("style", "background-color:white; color:black ; border:2px solid white");
            users[1].setAttribute("style", "background-color:green ; color:white; border:2px solid gray");
        }
    })
})




// #who wins 
boxes.forEach(function (value, x) {
    value.addEventListener("click", function () {
        if (patterns[0] == "x" && patterns[1] == "x" && patterns[2] == "x" || patterns[3] == "x" && patterns[4] == "x" && patterns[5] == "x" || patterns[6] == "x" && patterns[7] == "x" && patterns[8] == "x" || patterns[0] == "x" && patterns[3] == "x" && patterns[6] == "x" || patterns[1] == "x" && patterns[4] == "x" && patterns[7] == "x" || patterns[2] == "x" && patterns[5] == "x" && patterns[8] == "x" || patterns[0] == "x" && patterns[4] == "x" && patterns[8] == "x" || patterns[2] == "x" && patterns[4] == "x" && patterns[6] == "x") {
            player[0].innerHTML = `${player1} wins`;
            player[1].innerHTML = `${player2}, better luck next time`;

            pop_up();
        }
        else if (patterns[0] == "o" && patterns[1] == "o" && patterns[2] == "o" || patterns[3] == "o" && patterns[4] == "o" && patterns[5] == "o" || patterns[6] == "o" && patterns[7] == "o" && patterns[8] == "o" || patterns[0] == "o" && patterns[3] == "o" && patterns[6] == "o" || patterns[1] == "o" && patterns[4] == "o" && patterns[7] == "o" || patterns[2] == "o" && patterns[5] == "o" && patterns[8] == "o" || patterns[0] == "o" && patterns[4] == "o" && patterns[8] == "o" || patterns[2] == "o" && patterns[4] == "o" && patterns[6] == "o") {
            player[0].innerHTML = `${player2} wins`;
            player[1].innerHTML = `${player1}, better luck next time`;

            pop_up();
        }
    })
})





function pop_up() {
    ending.setAttribute("style", "transform: translate(-50%,-50%) scale(1)");
}

btn.addEventListener("click", function () {
    location.reload();
})

Startbtn.addEventListener("click", function () {
    player1 = username[0].value;
    player2 = username[1].value;
    player1name.innerHTML = player1;
    player2name.innerHTML = player2;
    starting.setAttribute("style", "transform: translate(-50%,-50%) scale(0)");

})
