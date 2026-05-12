Swal.fire({
        title: "Paket Pembuatan Web Landing Page",
        text: "Tingkatkan penjualan usaha kamu dengan landing page profesional yang menarik dan mudah digunakan. Pesan sekarang untuk solusi digital yang efektif!",
        icon: "info"
    });

    const tombol = document.getElementById('tombol');
    const teks = document.getElementById('teks');
    const header = document.getElementById('header');
    const toggleBtn = document.getElementById("toggleBtn");
    const body = document.body;

    alertify.defaults.glossary.title = 'Konfirmasi'; 
    alertify.defaults.glossary.ok = 'Ya, Lanjut';
    alertify.defaults.glossary.cancel = 'Batal';

    tombol.addEventListener('click', function(e) {
        e.preventDefault(); 
        
        alertify.confirm('Yakin mau pesan?',
            function(){
                alertify.success('Terhubung dengan admin...');
                teks.innerHTML = "🟢 Pesanan paket landing page berhasil dibuat! Anda terhubung dengan admin untuk proses selanjutnya."
                teks.style.color = "darkgreen";
                tombol.innerHTML = "Dipesan";
                tombol.style.backgroundColor = "lightgrey";
                tombol.style.border = "none";
                tombol.style.color = "grey";
                window.location.href = 'https://wa.me/6281584266490?text=Halo%20Admin%20FyzzCareer%20,%0A%0ASaya%20ingin%20memesan%20paket%20landing%20page';
            },
            function(){
                alertify.error('Dibatalkan');
            }
        );
    }); 

    // Dark mode 
    if(localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        toggleBtn.innerText = "☀️";
        header.classList.add("header");
        header.classList.remove("bg-primary");
    } else {
        toggleBtn.innerText = "🌙";
        header.classList.remove("header");
        header.classList.add("bg-primary");
    }

    toggleBtn.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        if(body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            toggleBtn.innerText = "☀️";
            header.classList.add("header");
            header.classList.remove("bg-primary");
        } else {
            localStorage.setItem("theme", "light");
            toggleBtn.innerText = "🌙";
            header.classList.remove("header");
            header.classList.add("bg-primary");
        }
    });