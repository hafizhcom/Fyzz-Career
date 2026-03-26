const usernameSelect = document.getElementById("username");
const passwordInput = document.getElementById("password");
const login = document.getElementById("login");

login.onclick = function(event){
    event.preventDefault();
    const username = usernameSelect.value;
    const password = passwordInput.value;

    if(username === "13572468" && password === "1357" ){
        Swal.fire({
        title: "Login Berhasil!",
        text: "Selamat datang",
        icon: "success",
        heightAuto: false
    }).then(() => {
        window.location.href = "toko.html";
    });
    } else if (username === "24681357" && password === "2468"){
        Swal.fire({
        title: "Login Berhasil!",
        text: "Selamat datang",
        icon: "success",
        heightAuto: false
    }).then(() => {
        window.location.href = "toko.html";
    });
    }else if (username === "14725836" && password === "1472"){
        Swal.fire({
        title: "Login Berhasil!",
        text: "Selamat datang",
        icon: "success",
        heightAuto: false
    }).then(() => {
        window.location.href = "toko.html";
    });
    }else if (username === "36914725" && password === "3691"){
        Swal.fire({
        title: "Login Berhasil!",
        text: "Selamat datang",
        icon: "success",
        heightAuto: false
    }).then(() => {
        window.location.href = "toko.html";
    });
    }else {
        Swal.fire({
        icon: "error",
        title: "Login gagal...",
        text: "Periksa username dan password kamu!!",
        heightAuto: false
});
    }
}
