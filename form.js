let username = document.getElementById("username");
let form = document.getElementById("form");
let Email = document.getElementById("Email");
let password = document.getElementById("password");
let submitBtn = document.getElementById("submitBtn");
submitBtn.style.background= "red"

//hover
submitBtn.addEventListener("click", modifysubmitBtn );

function modifysubmitBtn (){
    submitBtn.style.backgroundColor= "green";
    submitBtn.style.color="white";

    username.style.border="2px solid blue";
    Email.style.border="2px solid blue";
    password.style.border="2px solid blue";
}
