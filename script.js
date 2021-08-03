let userPass = document.querySelector("#password");
let userName = document.querySelector("#username");
let submit = document.querySelector("#submit-button");
let body = document.querySelector("body")
let success = document.querySelector("#success")
let error = document.querySelector("#error")

submit.onclick = function() {
    event.preventDefault();

    if (userPass.value == "Squirtle" && userName.value == "Baby Yoda") {
        success.style.display = "block"
        body.style.backgroundColor = "lightblue"
    }

    else {
        error.style.display = "block"
        body.style.backgroundColor = "black"
    }

    userPass.value = "";
    userName.value = "";
}

