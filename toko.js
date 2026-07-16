//booststrap //
document.addEventListener("DOMContentLoaded", function () {
  var popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]'),
  );
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  var nama = document.getElementById("nama").value;
  var layanan = document.getElementById("layanan").value;
  var pesan = document.getElementById("pesan").value;

  var nomor = "6281584266490"; // Ganti nomor kamu

  var url =
    "https://wa.me/" +
    nomor +
    "?text=Halo 👋,%20saya%20" +
    nama +
    "%0ALayanan%20Saya:%20" +
    layanan +
    "%0ADetail:%20" +
    pesan;

  window.open(url, "_blank");
});

// promosi
function promo() {
  let isMobile = window.innerWidth < 768;

  Swal.fire({
    title: "🎓 Promo Pelajar!",
    text: "CV + Surat Lamaran hanya Rp20.000",
    imageUrl: "poster-promosi-new.png",
    imageWidth: isMobile ? "80%" : "70%",
    width: isMobile ? "90%" : "500px",
    padding: isMobile ? "10px" : "20px",
  });
}

// Dark mode toggle
const toggleBtn = document.getElementById("toggleBtn");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggleBtn.innerText = "☀️";
} else {
  toggleBtn.innerText = "🌙";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.innerText = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.innerText = "🌙";
  }
});

//library alertify
const btnProduct = document.getElementById("btnProduct");
const btnProductTwo = document.getElementById("btnProductTwo");
const btnProductThree = document.getElementById("btnProductThree");
const btnProductFour = document.getElementById("btnProductFour");

btnProduct.addEventListener("click", () => {
  btnProduct.innerHTML =
    '<i class="fa-solid fa-arrows-rotate" id="spinner1"></i> memuat paket pesanan kamu';

  btnProduct.style.background = "none";
  btnProduct.style.border = "none";
  btnProduct.style.color = "grey";

  const spinner1 = document.getElementById("spinner1");
  spinner1.classList.add("spinner1");

  setTimeout(() => {
    window.location.href = "produk-cv.html";
  }, 2000);
});

btnProductTwo.addEventListener("click", () => {
  btnProductTwo.innerHTML =
    '<i class="fa-solid fa-arrows-rotate" id="spinner2"></i> memuat paket pesanan kamu';
  btnProductTwo.style.background = "none";
  btnProductTwo.style.border = "none";
  btnProductTwo.style.color = "grey";

  const spinner2 = document.getElementById("spinner2");
  spinner2.classList.add("spinner1");

  setTimeout(() => {
    window.location.href = "produk-portofolio.html";
  }, 2000);
});

btnProductThree.addEventListener("click", () => {
  btnProductThree.innerHTML =
    '<i class="fa-solid fa-arrows-rotate" id="spinner3"></i> memuat paket pesanan kamu';
  btnProductThree.style.background = "none";
  btnProductThree.style.border = "none";
  btnProductThree.style.color = "grey";

  const spinner3 = document.getElementById("spinner3");
  spinner3.classList.add("spinner1");

  setTimeout(() => {
    window.location.href = "produk-makalah.html";
  }, 2000);
});

btnProductFour.addEventListener("click", () => {
  btnProductFour.innerHTML =
    '<i class="fa-solid fa-arrows-rotate" id="spinner4"></i> memuat paket pesanan kamu';
  btnProductFour.style.background = "none";
  btnProductFour.style.border = "none";
  btnProductFour.style.color = "grey";

  const spinner4 = document.getElementById("spinner4");
  spinner4.classList.add("spinner1");

  setTimeout(() => {
    window.location.href = "landing-page.html";
  }, 2000);
});

// games button
const buttonPlay = document.getElementById("buttonPlay");

buttonPlay.addEventListener('click', () => {
  buttonPlay.textContent = "||"
  Swal.fire({
    title: "Siap untuk bermain dengan logika kamu ?",
    width: 600,
    padding: "1em",
    color: "#3422f3",
    background: "#f2f3f5",

    backdrop: `
      rgba(3, 3, 26, 0.4)
      url("pixabay-cat.gif")
      no-repeat
    `,

    didOpen: () => {
      const backdrop = document.querySelector('.swal2-container');
      backdrop.style.backgroundSize = "30%";
      backdrop.style.backgroundPosition = "20px 80px";
    }
  }).then((result) => {
    if (result.isConfirmed) {
      setTimeout(() => {
        window.location.href = "fyzzgames.html";
      }, 1000); 
    }
  });
});

const method = document.getElementById("method");

method.addEventListener("click", () => {
  Swal.fire({
  title: "Custom animation with Animate.css",
  showClass: { popup: `
      animate__animated
      animate__backInDown
      animate__slow
    ` },
  hideClass: { popup: `
      animate__animated
      animate__zoomOutDown
      animate__slow
    ` }
});
})

// fitur username
const userElement = document.getElementById('user');
const userProduct = document.getElementById('userProduct');
const userTestimoni = document.getElementById('userTestimoni');
const userGame = document.getElementById('userGame');
let username = localStorage.getItem('username');

 while (!username || username.trim() === " " ){
  username = prompt('Masukkan nama kamu:');
  localStorage.setItem('username', username);
}

userElement.textContent = "Hai " + username + " 👋,ingin pesan apa hari ini ?";
userProduct.textContent = username + ", ini produk yang mungkin kamu suka ❤️";
userProduct.style.fontSize = "0.980em";
userProduct.style.fontFamily = "Arial, sans-serif";
userProduct.style.wordSpacing = "0.05em";

//user testimoni
userTestimoni.textContent = username + ", ini kata pelanggan kami ⭐";
userTestimoni.style.fontSize = "1.1em";
userTestimoni.style.fontFamily = "Arial, sans-serif";
userTestimoni.style.wordSpacing = "0.05em";

//user game
userGame.textContent = `Halo ${username}, waktunya main di FyzzGames! 🎮`;


function clearUsername() {
  username = prompt('Ganti nama kamu : ');
  localStorage.setItem('username', username);
  userElement.textContent = "Hai " + username + " 👋, Selamat datang! ingin pesan apa hari ini ?";
}

