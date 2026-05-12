const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

    const button = document.getElementById('button');
    const text = document.getElementById('text');
    const tombol = document.getElementById('tombol');
    const teks = document.getElementById('teks');
    const header = document.getElementById('header');
    const toggleBtn = document.getElementById('toggleBtn');
    const footer = document.getElementById('footer');
    const body = document.body;

    alertify.defaults.glossary.title = 'Konfirmasi Pesanan'; 
    alertify.defaults.glossary.ok = 'Ya, lanjut pesan';
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
                window.location.href = 'https://wa.me/6281584266490?text=Halo%20Admin%20FyzzCareer%20,%0A%0ASaya%20ingin%20memesan%20paket%20landing%20page%20(paket%20standard)';
            },
            function(){
                alertify.error('Dibatalkan');
            }
        );
    }); 

    alertify.defaults.glossary.title = 'Konfirmasi Pesanan'; 
    alertify.defaults.glossary.ok = 'Ya, lanjut pesan';
    alertify.defaults.glossary.cancel = 'Batal';

    button.addEventListener('click', function(e) {
        e.preventDefault(); 
        
        alertify.confirm('Yakin mau pesan?',
            function(){
                alertify.success('Terhubung dengan admin...');
                text.innerHTML = "🟢 Pesanan paket landing page berhasil dibuat! Anda terhubung dengan admin untuk proses selanjutnya."
                text.style.color = "darkgreen";
                window.location.href = 'https://wa.me/6281584266490?text=Halo%20Admin%20FyzzCareer%20,%0A%0ASaya%20ingin%20memesan%20paket%20landing%20page%20(paket%20premium)';
                button.innerHTML = "Dipesan";
                button.style.backgroundColor = "lightgrey";
                button.style.border = "none";
                button.style.color = "grey";
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
        if(body.classList.contains("dark-mode")) {
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