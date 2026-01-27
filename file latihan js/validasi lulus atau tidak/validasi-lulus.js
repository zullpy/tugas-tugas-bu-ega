// deklarasi fungsi untuk tombol hitung rata-rata
function hitungRataRata() {
    // untuk mengambil nilai dari inputan dan mengubahnya menjadi tipe data number
    const nilai1 = parseFloat(document.getElementById('nilai1').value);
    const nilai2 = parseFloat(document.getElementById('nilai2').value);
    const nilai3 = parseFloat(document.getElementById('nilai3').value);
    // deklarasi variabel untuk menampung hasil rata-rata
    let rataRata = 0;

    // rumus untuk menghitung rata-rata ditambah lalu dibagi dengan 3
    rataRata = (nilai1 + nilai2 + nilai3) / 3;
    // menampilkan hasil rata-rata pada elemen dengan id 'rataRata'
    document.getElementById('rataRata').innerText = "Nilai Rata-Rata: " + rataRata;

    // validasi kelulusan berdasarkan nilai rata-rata
    if (rataRata < 77){
        document.getElementById('status').innerText = "status: maaf anda tidak lulus❌";
    }else{
        document.getElementById('status').innerText = "status: selamat anda lulus✅";
    }
}

