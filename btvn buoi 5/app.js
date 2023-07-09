class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

function signup() {
    let name = document.getElementById("signup-name").value;
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("nhap lai pass");
        return;
    }

    let user = new User(name, email, password);

    localStorage.setItem("data", JSON.stringify(user));
    

    alert("dang ky thanh cong");
}

function signin() {
    
    let name = document.getElementById("signin-name").value;
    let email = document.getElementById("signin-email").value;
    let password = document.getElementById("signin-password").value;

    let user = localStorage.getItem("data");
    
    
    if (email == user.email && password == user.password && name == user.name) {
        alert("dang nhap thanh cong");
    } else {
        alert("nhap lai");
    }
}

function change() {
    window.location.href = "signin.html"
}