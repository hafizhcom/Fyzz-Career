const soalOne = document.getElementById("soalOne");
const soalTwo = document.getElementById("soalTwo");
const soalThree = document.getElementById("soalThree");
const soalFour = document.getElementById("soalFour");
const soalFive = document.getElementById("soalFive");
const soalSix = document.getElementById("soalSix");
const soalSeven = document.getElementById("soalSeven");
const soalEight = document.getElementById("soalEight");
const soalNine = document.getElementById("soalNine");
const soalTeen = document.getElementById("soalTeen");

const gameOne = document.getElementById("gameOne");
const gameTwo = document.getElementById("gameTwo");
const gameThree = document.getElementById("gameThree");
const gameFour = document.getElementById("gameFour");
const gameFive = document.getElementById("gameFive");
const gameSix = document.getElementById("gameSix");
const gameSeven = document.getElementById("gameSeven");
const gameEight = document.getElementById("gameEight");
const gameNine = document.getElementById("gameNine");
const gameTeen = document.getElementById("gameTeen");

//button game
const btnOne = document.getElementById("btnOne");
const btnTwo = document.getElementById("btnTwo");
const btnThree = document.getElementById("btnThree");
const btnFour = document.getElementById("btnFour");
const btnFive = document.getElementById("btnFive");
const btnSix = document.getElementById("btnSix");
const btnSeven = document.getElementById("btnSeven");
const btnEight = document.getElementById("btnEight");
const btnNine = document.getElementById("btnNine");
const btnTeen = document.getElementById("btnTeen");

let point = document.getElementById("point");
let pointTwo = document.getElementById("pointTwo");
let pointThree = document.getElementById("pointThree");
let pointFour = document.getElementById("pointFour");
let pointFive = document.getElementById("pointFive");
let pointSix = document.getElementById("pointSix");
let pointSeven = document.getElementById("pointSeven");
let pointEight = document.getElementById("pointEight");
let pointNine = document.getElementById("pointNine");
let pointTeen = document.getElementById("pointTeen");

let score = 0;

// games 1
btnOne.addEventListener("click", () => {
  if (soalOne.value.toLowerCase().trim() === "sisir") {
    score += 4;
    point.innerHTML = "point : 4 ";
    soalTwo.disabled = false;
    gameOne.classList.add("gameOne"); // menambahkan kelas untuk memberikan efek pada game pertama saat jawaban benar
    btnOne.disabled = true;

    Swal.fire({
      title: "Hebat, tebakanmu tepat!",
      width: 400,
      height: 200,
      padding: "1rem",
      color: "#5af89c",
      background: `
    radial-gradient(circle at top,
    rgba(221, 235, 23, 0.96),
    transparent 40%),

    linear-gradient(145deg,
    #020617,
    #0f172a,
    #111827)
  `,

      confirmButtonColor: "#00ffaa",

      backdrop: `
    rgba(0,0,0,0.75)
    url("pixabay-wins.gif")
    no-repeat
    `,
      didOpen: () => {
        const backdrop = document.querySelector(".swal2-container");
        backdrop.style.backgroundSize = "55%";
        backdrop.style.backgroundPosition = "20px 80px";
      },
    });
  } else {
    // nyawa -= 1;
    Swal.fire({
      title: "Jawaban masih belum tepat.",
      width: 400,
      height: 200,
      padding: "1rem",
      color: "#e41e1e",
      background: `
    radial-gradient(circle at top,
    rgba(255,0,80,0.20),
    transparent 40%),

    linear-gradient(145deg,
    #1a0000,
    #220808,
    #120303)
  `,

      confirmButtonColor: "#ff1744",
      backdrop: `
       rgba(0,0,0,0.8)
    url("pixabay-wrong.gif")
    no-repeat
    `,
      didOpen: () => {
        const backdrop = document.querySelector(".swal2-container");
        backdrop.style.backgroundSize = "55%";
        backdrop.style.backgroundPosition = "20px 80px";
      },
    });
    score -= 2;
  }
  document.getElementById("score").innerText = "Score Kamu : " + score;
  
  if (btnOne.disabled ){
    btnOne.textContent = "sudah terjawab";
    btnOne.style.backgroundColor = "lightgrey";
  }
});

// games 2
btnTwo.addEventListener("click", () => {
  if (soalTwo.value.toLowerCase().trim() === "usia") {
    score += 4;
    pointTwo.innerHTML = "point : 4";
    soalThree.disabled = false;
    gameTwo.classList.add("gameTwo");
    btnTwo.disabled = true;

    Swal.fire({
      title: "Pemanasan yang bagus 🔥",
      width: 400,
      height: 200,
      padding: "1rem",
      color: "#716add",
      background: `
    radial-gradient(circle at top,
    rgba(221, 235, 23, 0.96),
    transparent 40%),

    linear-gradient(145deg,
    #020617,
    #0f172a,
    #111827)
  `,

      confirmButtonColor: "#00ffaa",

      backdrop: `
    rgba(0,0,0,0.75)
    url("pixabay-wins.gif")
    no-repeat
    `,
      didOpen: () => {
        const backdrop = document.querySelector(".swal2-container");
        backdrop.style.backgroundSize = "55%";
        backdrop.style.backgroundPosition = "20px 80px";
      },
    });
  } else {
    Swal.fire({
      title: "Masih ada kesalahan pada jawabanmu.",
      width: 400,
      height: 200,
      padding: "1rem",
      color: "#e41e1e",
      background: `
    radial-gradient(circle at top,
    rgba(255,0,80,0.20),
    transparent 40%),

    linear-gradient(145deg,
    #1a0000,
    #220808,
    #120303)
  `,

      confirmButtonColor: "#ff1744",
      backdrop: `
       rgba(0,0,0,0.8)
    url("pixabay-wrong.gif")
    no-repeat
    `,
      didOpen: () => {
        const backdrop = document.querySelector(".swal2-container");
        backdrop.style.backgroundSize = "55%";
        backdrop.style.backgroundPosition = "20px 80px";
      },
    });
    score -= 2;
  }
  document.getElementById("score").innerText = "Score Kamu : " + score;
  if (btnTwo.disabled ){
    btnOne.textContent = "sudah terjawab";
    btnOne.style.backgroundColor = "lightgrey";
  }
});

// games 3
btnThree.addEventListener("click", () => {
  if (soalThree.value.toLowerCase().trim() === "balon") {
    score += 4;
    pointThree.innerHTML = "point : 4";
    soalFour.disabled = false;
    gameThree.classList.add("gameThree");
    btnThree.disabled = true;

    Swal.fire({
      title: "Nice! Kamu lolos level pemula 😎",
      width: 400,
      height: 200,
      padding: "1rem",
      color: "#716add",
      background: `
    radial-gradient(circle at top,
    rgba(221, 235, 23, 0.96),
    transparent 40%),

    linear-gradient(145deg,
    #020617,
    #0f172a,
    #111827)
  `,

      confirmButtonColor: "#00ffaa",

      backdrop: `
    rgba(0,0,0,0.75)
    url("pixabay-wins.gif")
    no-repeat
    `,
      didOpen: () => {
        const backdrop = document.querySelector(".swal2-container");
        backdrop.style.backgroundSize = "55%";
        backdrop.style.backgroundPosition = "20px 80px";
      },
    });
  } else {
    Swal.fire({
      title: "Coba perhatikan petunjuknya lagi.",
      width: 400,
      height: 200,
      padding: "1rem",
      color: "#e41e1e",
      background: `
    radial-gradient(circle at top,
    rgba(255,0,80,0.20),
    transparent 40%),

    linear-gradient(145deg,
    #1a0000,
    #220808,
    #120303)
  `,

      confirmButtonColor: "#ff1744",
      backdrop: `
       rgba(0,0,0,0.8)
    url("pixabay-wrong.gif")
    no-repeat
    `,
      didOpen: () => {
        const backdrop = document.querySelector(".swal2-container");
        backdrop.style.backgroundSize = "55%";
        backdrop.style.backgroundPosition = "20px 80px";
      },
    });
    score -= 2;
  }
  document.getElementById("score").innerText = "Score Kamu : " + score;
  if (btnThree.disabled ){
    btnOne.textContent = "sudah terjawab";
    btnOne.style.backgroundColor = "lightgrey";
  }
});

// games 4
btnFour.addEventListener("click", () => {
  if (soalFour.value.toLowerCase().trim() === "password") {
    score += 8;
    pointFour.innerHTML = "point : 8";
    soalFive.disabled = false;
    gameFour.classList.add("gameFour");
    btnFour.disabled = true;

    Swal.fire({
      title: "Wih… mulai jago ternyata 😏",
      width: 400,
      height: 200,
      padding: "1rem",
      color: "#716add",
      background: `
    radial-gradient(circle at top,
    rgba(221, 235, 23, 0.96),
    transparent 40%),

    linear-gradient(145deg,
    #020617,
    #0f172a,
    #111827)
  `,

      confirmButtonColor: "#00ffaa",

      backdrop: `
    rgba(0,0,0,0.75)
    url("pixabay-wins.gif")
    no-repeat
    `,
      didOpen: () => {
        const backdrop = document.querySelector(".swal2-container");
        backdrop.style.backgroundSize = "55%";
        backdrop.style.backgroundPosition = "20px 80px";
      },
    });
  } else {
    Swal.fire({
      title: "Jawaban yang salah bisa membawa jalan buntu.",
      width: 400,
      height: 200,
      padding: "1rem",
      color: "#e41e1e",
      background: `
    radial-gradient(circle at top,
    rgba(255,0,80,0.20),
    transparent 40%),

    linear-gradient(145deg,
    #1a0000,
    #220808,
    #120303)
  `,

      confirmButtonColor: "#ff1744",
      backdrop: `
       rgba(0,0,0,0.8)
    url("pixabay-wrong.gif")
    no-repeat
    `,
      didOpen: () => {
        const backdrop = document.querySelector(".swal2-container");
        backdrop.style.backgroundSize = "55%";
        backdrop.style.backgroundPosition = "20px 80px";
      },
    });
    score -= 4;
  }
  document.getElementById("score").innerText = "Score Kamu : " + score;
  if (btnFour.disabled ){
    btnOne.textContent = "sudah terjawab";
    btnOne.style.backgroundColor = "lightgrey";
  }
});

// games 5
btnFive.addEventListener("click", () => {
  if (soalFive.value.toLowerCase().trim() === "lubang") {
    score += 8;
    pointFive.innerHTML = "point : 8";
    gameFive.classList.add("gameFive");
    soalSix.disabled = false;
    btnFive.disabled = true;

    Swal.fire({
      title: "Skill berpikirmu naik level ⚡",
      width: 400,
      height: 200,
      padding: "1rem",
      color: "#716add",
      background: `
    radial-gradient(circle at top,
    rgba(221, 235, 23, 0.96),
    transparent 40%),

    linear-gradient(145deg,
    #020617,
    #0f172a,
    #111827)
  `,

      confirmButtonColor: "#00ffaa",

      backdrop: `
    rgba(0,0,0,0.75)
    url("pixabay-wins.gif")
    no-repeat
    `,
      didOpen: () => {
        const backdrop = document.querySelector(".swal2-container");
        backdrop.style.backgroundSize = "55%";
        backdrop.style.backgroundPosition = "20px 80px";
      },
    });
  } else {
    Swal.fire({
      title: "Teka-teki ini berhasil mengelabui dirimu.",
      width: 400,
      height: 200,
      padding: "1rem",
      color: "#e41e1e",
      background: `
    radial-gradient(circle at top,
    rgba(255,0,80,0.20),
    transparent 40%),

    linear-gradient(145deg,
    #1a0000,
    #220808,
    #120303)
  `,

      confirmButtonColor: "#ff1744",
      backdrop: `
       rgba(0,0,0,0.8)
    url("pixabay-wrong.gif")
    no-repeat
    `,
      didOpen: () => {
        const backdrop = document.querySelector(".swal2-container");
        backdrop.style.backgroundSize = "55%";
        backdrop.style.backgroundPosition = "20px 80px";
      },
    });
    score -= 4;
  }
  document.getElementById("score").innerText = "Score Kamu : " + score;
  if (btnFive.disabled ){
    btnOne.textContent = "sudah terjawab";
    btnOne.style.backgroundColor = "lightgrey";
  }
});

// games 6
btnSix.addEventListener("click", () => {
  if (soalSix.value.toLowerCase().trim() === "masa depan") {
    score += 8;
    pointSix.innerHTML = "point : 8";
    soalSeven.disabled = false;
    gameSix.classList.add("gameSix");
    btnSix.disabled = true;

    Swal.fire({
      title:
        "⭐ Selamat, Anda berhasil menyelesaikan level menengah dengan baik.",
      width: 400,
      height: 200,
      padding: "1rem",
      color: "#716add",
      background: `
    radial-gradient(circle at top,
    rgba(221, 235, 23, 0.96),
    transparent 40%),

    linear-gradient(145deg,
    #020617,
    #0f172a,
    #111827)
  `,

      confirmButtonColor: "#00ffaa",

      backdrop: `
    rgba(0,0,0,0.75)
    url("pixabay-wins.gif")
    no-repeat
    `,
      didOpen: () => {
        const backdrop = document.querySelector(".swal2-container");
        backdrop.style.backgroundSize = "55%";
        backdrop.style.backgroundPosition = "20px 80px";
      },
    });
  } else {
    Swal.fire({
      title: "Masih ada kesalahan pada jawabanmu.",
      width: 400,
      height: 200,
      padding: "1rem",
      color: "#e41e1e",
      background: `
    radial-gradient(circle at top,
    rgba(255,0,80,0.20),
    transparent 40%),

    linear-gradient(145deg,
    #1a0000,
    #220808,
    #120303)
  `,

      confirmButtonColor: "#ff1744",
      backdrop: `
       rgba(0,0,0,0.8)
    url("pixabay-wrong.gif")
    no-repeat
    `,
      didOpen: () => {
        const backdrop = document.querySelector(".swal2-container");
        backdrop.style.backgroundSize = "55%";
        backdrop.style.backgroundPosition = "20px 80px";
      },
    });
    score -= 4;
  }
  document.getElementById("score").innerText = "Score Kamu : " + score;
  if (btnSix.disabled ){
    btnOne.textContent = "sudah terjawab";
    btnOne.style.backgroundColor = "lightgrey";
  }
});

// games 7
btnSeven.addEventListener("click", () => {
  if (soalSeven.value.toLowerCase().trim() === "awan") {
    score += 12;
    pointSeven.innerHTML = "point : 12";
    soalEight.disabled = false;
    gameSeven.classList.add("gameSeven");
    btnSeven.disabled = true;

    Swal.fire({
      title: "⚡Tidak semua orang bisa sampai sini. Kamu berhasil!",
      width: 400,
      height: 200,
      padding: "1rem",
      color: "#716add",
      background: `
    radial-gradient(circle at top,
    rgba(221, 235, 23, 0.96),
    transparent 40%),

    linear-gradient(145deg,
    #020617,
    #0f172a,
    #111827)
  `,

      confirmButtonColor: "#00ffaa",

      backdrop: `
    rgba(0,0,0,0.75)
    url("pixabay-wins.gif")
    no-repeat
    `,
      didOpen: () => {
        const backdrop = document.querySelector(".swal2-container");
        backdrop.style.backgroundSize = "55%";
        backdrop.style.backgroundPosition = "20px 80px";
      },
    });
  } else {
    Swal.fire({
      title:
        "🧠 Tantangan level Master memerlukan ketelitian yang lebih tinggi.",
      width: 400,
      height: 200,
      padding: "1rem",
      color: "#e41e1e",
      background: `
    radial-gradient(circle at top,
    rgba(255,0,80,0.20),
    transparent 40%),

    linear-gradient(145deg,
    #1a0000,
    #220808,
    #120303)
  `,

      confirmButtonColor: "#ff1744",
      backdrop: `
       rgba(0,0,0,0.8)
    url("pixabay-wrong.gif")
    no-repeat
    `,
      didOpen: () => {
        const backdrop = document.querySelector(".swal2-container");
        backdrop.style.backgroundSize = "55%";
        backdrop.style.backgroundPosition = "20px 80px";
      },
    });
    score -= 6;
  }
  document.getElementById("score").innerText = "Score Kamu : " + score;
  if (btnSeven.disabled ){
    btnOne.textContent = "sudah terjawab";
    btnOne.style.backgroundColor = "lightgrey";
  }
});

// games 8
btnEight.addEventListener("click", () => {
  if (soalEight.value.toLowerCase().trim() === "gema") {
    score += 12;
    pointEight.innerHTML = "point : 12";
    soalNine.disabled = false;
    gameEight.classList.add("gameEight");
    btnEight.disabled = true;

    Swal.fire({
      title: "💡Kecerdasanmu berhasil membawamu menjadi seorang Master.",
      width: 400,
      height: 200,
      padding: "1rem",
      color: "#716add",
      background: `
      radial-gradient(circle at top,
    rgba(221, 235, 23, 0.96),
      transparent 40%),

      linear-gradient(145deg,
    #020617,
    #0f172a,
    #111827)
  `,

      confirmButtonColor: "#00ffaa",

      backdrop: `
    rgba(0,0,0,0.75)
    url("pixabay-wins.gif")
    no-repeat
    `,
      didOpen: () => {
        const backdrop = document.querySelector(".swal2-container");
        backdrop.style.backgroundSize = "55%";
        backdrop.style.backgroundPosition = "20px 80px";
      },
    });
  } else {
    Swal.fire({
      title: "⚡Level Master menghadirkan tantangan yang lebih kompleks.",
      width: 400,
      height: 200,
      padding: "1rem",
      color: "#e41e1e",
      background: `
    radial-gradient(circle at top,
    rgba(255,0,80,0.20),
    transparent 40%),

    linear-gradient(145deg,
    #1a0000,
    #220808,
    #120303)
  `,

      confirmButtonColor: "#ff1744",
      backdrop: `
       rgba(0,0,0,0.8)
    url("pixabay-wrong.gif")
    no-repeat
    `,
      didOpen: () => {
        const backdrop = document.querySelector(".swal2-container");
        backdrop.style.backgroundSize = "55%";
        backdrop.style.backgroundPosition = "20px 80px";
      },
    });
    score -= 6;
  }
  document.getElementById("score").innerText = "Score Kamu : " + score;
  if (btnEight.disabled ){
    btnOne.textContent = "sudah terjawab";
    btnOne.style.backgroundColor = "lightgrey";
  }
});

// games 9
btnNine.addEventListener("click", () => {
  if (soalNine.value.toLowerCase().trim() === "kantor pos") {
    score += 12;
    pointNine.innerHTML = "point : 12";
    gameNine.classList.add("gameNine");
    soalTeen.disabled = false;
    btnNine.disabled = true;

    Swal.fire({
      title: "👏Baik sekali, Anda berhasil menyelesaikan tahap ini.",
      width: 400,
      height: 200,
      padding: "1rem",
      color: "#716add",
      background: `
    radial-gradient(circle at top,
    rgba(221, 235, 23, 0.96),
    transparent 40%),

    linear-gradient(145deg,
    #020617,
    #0f172a,
    #111827)
  `,

      confirmButtonColor: "#00ffaa",

      backdrop: `
    rgba(0,0,0,0.75)
    url("pixabay-wins.gif")
    no-repeat
    `,
      didOpen: () => {
        const backdrop = document.querySelector(".swal2-container");
        backdrop.style.backgroundSize = "55%";
        backdrop.style.backgroundPosition = "20px 80px";
      },
    });
  } else {
    Swal.fire({
      title:
        "🏅Anda telah mencapai level tertinggi. Cobalah sekali lagi untuk menuntaskannya.",
      width: 400,
      height: 200,
      padding: "1rem",
      color: "#e41e1e",
      background: `
    radial-gradient(circle at top,
    rgba(255,0,80,0.20),
    transparent 40%),

    linear-gradient(145deg,
    #1a0000,
    #220808,
    #120303)
  `,

      confirmButtonColor: "#ff1744",
      backdrop: `
    rgba(0,0,0,0.8)
    url("pixabay-wrong.gif")
    no-repeat
    `,
      didOpen: () => {
        const backdrop = document.querySelector(".swal2-container");
        backdrop.style.backgroundSize = "55%";
        backdrop.style.backgroundPosition = "20px 80px";
      },
    });
    score -= 6;
  }
  document.getElementById("score").innerText = "Score Kamu : " + score;
  if (btnNine.disabled ){
    btnOne.textContent = "sudah terjawab";
    btnOne.style.backgroundColor = "lightgrey";
  }
});

// games 10
btnTeen.addEventListener("click", () => {
  if (soalTeen.value.toLowerCase().trim() === "botol") {
    score += 12;
    pointTeen.innerHTML = "point : 12";
    gameTeen.classList.add("gameTeen");
    btnTeen.disabled = true;

    Swal.fire({
      title: "💎Tantangan terakhir telah ditaklukkan. Kamu adalah sang Master.",
      width: 400,
      height: 200,
      padding: "1rem",
      color: "#716add",
      background: `
    radial-gradient(circle at top,
    rgba(221, 235, 23, 0.96),
    transparent 40%),

    linear-gradient(145deg,
    #020617,
    #0f172a,
    #111827)
  `,

      confirmButtonColor: "#00ffaa",

      backdrop: `
    rgba(0,0,0,0.75)
    url("pixabay-wins.gif")
    no-repeat
    `,
      didOpen: () => {
        const backdrop = document.querySelector(".swal2-container");
        backdrop.style.backgroundSize = "55%";
        backdrop.style.backgroundPosition = "20px 80px";
      },
    });
  } else {
    Swal.fire({
      title: "🎯 Anda sudah sangat dekat. Cobalah sekali lagi.",
      width: 400,
      height: 200,
      padding: "1rem",
      color: "#e41e1e",
      background: `
    radial-gradient(circle at top,
    rgba(255,0,80,0.20),
    transparent 40%),

    linear-gradient(145deg,
    #1a0000,
    #220808,
    #120303)
  `,

      confirmButtonColor: "#ff1744",
      backdrop: `
       rgba(0,0,0,0.8)
    url("pixabay-wrong.gif")
    no-repeat
    `,
      didOpen: () => {
        const backdrop = document.querySelector(".swal2-container");
        backdrop.style.backgroundSize = "55%";
        backdrop.style.backgroundPosition = "20px 80px";
      },
    });
    score -= 6;
  }
  document.getElementById("score").innerText = "Score Kamu : " + score;
  if (btnTeen.disabled ){
    btnOne.textContent = "sudah terjawab";
    btnOne.style.backgroundColor = "lightgrey";
  }
  
});

// Dark mode
const body = document.body;
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggleBtn.innerText = "☀️";
  header.classList.add("header");
  header.classList.remove("bg-primary");
  footer.classList.add("footer");
  footer.classList.remove("bg-primary");
} else {
  toggleBtn.innerText = "🌙";
  header.classList.remove("header");
  header.classList.add("bg-primary");
  footer.classList.remove("footer");
  footer.classList.add("bg-primary");
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.innerText = "☀️";
    header.classList.add("header");
    header.classList.remove("bg-primary");
    footer.classList.add("footer");
    footer.classList.remove("bg-primary");
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.innerText = "🌙";
    header.classList.remove("header");
    header.classList.add("bg-primary");
    footer.classList.remove("footer");
    footer.classList.add("bg-primary");
  }
});

const btnWinner = document.getElementById("winner");
function checkWinner() {
  if (score === 84 && !localStorage.getItem("namePlayer")) {
    Swal.fire({
      title: "🏆 Hadiah Berhasil Diklaim!",
      text: "Kamu berhasil menyelesaikan semua tantangan dan berhak atas hadiah ini.",
      imageUrl: "kupon_pemenang_fyzzcareer.png",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image"
    });
    localStorage.setItem("namePlayer", namePlayer); 
  } else if (score === 84) {
    Swal.fire({
      title: "Sudah diklaim",
      text: "Hadiah ini hanya bisa diklaim satu kali.",
      icon: "info"
    });
  } else {
    Swal.fire({
      title: "Belum selesai nih!",
      text: "Skor kamu belum cukup untuk mengklaim hadiah ini! coba lagi!",
      icon: "info"
    });
  }
}

 document.addEventListener('DOMContentLoaded', () => {
  const bgm = document.getElementById('bgm');
  const btnMusic = document.getElementById('btnMusic');
  let isPlaying = false;

  btnMusic.addEventListener('click', () => {
    if(!isPlaying){
      bgm.play();
      btnMusic.textContent = "🔊";
      isPlaying = true;
    } else {
      bgm.pause();
      btnMusic.textContent = "🔈";
    }
  })
})
