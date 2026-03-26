//booststrap //
document.addEventListener("DOMContentLoaded", function () {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
    })
})

// form whatsaap //
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    var nama = document.getElementById("nama").value;
    var layanan = document.getElementById("layanan").value;
    var pesan = document.getElementById("pesan").value;

    var nomor = "6281584266490"; // Ganti nomor kamu

    var url = "https://wa.me/" + nomor + 
            "?text=Halo,%20saya%20" + nama + 
            "%0ASaya%20ingin%20order:%20" + layanan +
            "%0APesan:%20" + pesan;

    window.open(url, "_blank");
});

// promosi
function promo() {

    let isMobile = window.innerWidth < 768;

    //fungsi javascript untuk membuat pop up modern dan cantik
    Swal.fire({
    title: '🎓 Promo Pelajar!',
    text: 'CV + Surat Lamaran hanya Rp20.000',
    imageUrl: 'poster-promosi-new.png',
    imageWidth: isMobile ? '80%' : '70%', 
    width: isMobile ? '90%' : '500px',
    padding: isMobile ? '10px' : '20px',
    });

}