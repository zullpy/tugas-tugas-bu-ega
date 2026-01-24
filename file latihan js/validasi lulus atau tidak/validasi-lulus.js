function hitungRataRata() {
    const nilai1 = parseFloat(document.getElementById('nilai1').value);
    const nilai2 = parseFloat(document.getElementById('nilai2').value);
    const nilai3 = parseFloat(document.getElementById('nilai3').value);
    let rataRata = 0;

    rataRata = (nilai1 + nilai2 + nilai3) / 3;
    document.getElementById('rataRata').innerText = "Nilai Rata-Rata: " + rataRata;

    if (rataRata < 77){
        document.getElementById('status').innerText = "status: maaf anda tidak lulus❌";
    }else{
        document.getElementById('status').innerText = "status: selamat anda lulus✅";
    }
}

