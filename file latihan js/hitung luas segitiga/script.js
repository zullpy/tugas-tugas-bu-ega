function hitungLuas(){
    const a = parseFloat(document.getElementById("alas").value);
    const t = parseFloat(document.getElementById("tinggi").value);
    let hasil = 0;

    if(!isNaN(a) && !isNaN(t)){
        // rumus luas segitiga
        hasil = 0.5 * a * t;
        // menamoilkan hasil dari hitung luas segitiga 
        document.getElementById("hasil").innerHTML = "Luas Segitiga: " + hasil;
    } else {
        // jika inputan nya tidak terisi akan muncul teks dibawah
        document.getElementById("hasil").innerHTML = "Mohon masukkan nilai yang valid untuk alas dan tinggi.";
    }
}