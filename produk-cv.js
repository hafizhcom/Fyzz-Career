Swal.fire({
    title: "Buat CV Impian Anda ✨",
    text: "CV profesional, menarik, dan bisa direquest sesuai kebutuhan karier Anda. Tingkatkan peluang diterima kerja sekarang!",
    icon: "info"
});

const toggleBtn = document.getElementById("toggleBtn");
const body = document.body;
const header = document.getElementById("header");

// Dark mode 
    if(localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        toggleBtn.innerText = "☀️";
        header.classList.add("header");
        header.classList.remove("bg-primary");
        footer.classList.add("header");
        footer.classList.remove("bg-primary");
    } else {
        toggleBtn.innerText = "🌙";
        header.classList.remove("header");
        header.classList.add("bg-primary");
        footer.classList.remove("header");
        footer.classList.add("bg-primary");
    }

    toggleBtn.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        if(body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            toggleBtn.innerText = "☀️";
            header.classList.add("header");
            header.classList.remove("bg-primary");
            footer.classList.add("header");
            footer.classList.remove("bg-primary");
        } else {
            localStorage.setItem("theme", "light");
            toggleBtn.innerText = "🌙";
            header.classList.remove("header");
            header.classList.add("bg-primary");
            footer.classList.remove("header");
            footer.classList.add("bg-primary");
        }
    });