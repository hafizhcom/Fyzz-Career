function hitung(operasi) {
    const harga1 = parseFloat(document.getElementById('hargaBarang').value);
    const harga2 = parseFloat(document.getElementById('hargaBarang2').value);
    let hasil;

    if (isNaN(harga1) || isNaN(harga2)) {
        document.getElementById('hasil').textContent = 'Masukkan harga yang valid!';
        return;
    }

    switch (operasi) {
        case'+' :
        hasil = harga1 + harga2;
        break;

        case '-' :
            hasil = harga1 - harga2;
            break;

        case '*' :
            hasil = harga1 * harga2;
            break;

            case '/' :
                if (harga2 === 0) {
                    hasil = 'Tidak bisa dibagi dengan nol!';
                } else {
                    hasil = harga1 / harga2;
                }
    }
    document.getElementById('hasil').innerText = hasil;
}

function reset(){
    document.getElementById('hargaBarang').value = '';
    document.getElementById('hargaBarang2').value = '';
    document.getElementById('hasil').innerText = '0';
}
