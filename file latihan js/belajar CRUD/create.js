// Array untuk menyimpan data nama
let data = [];

// Fungsi untuk menambahkan nama ke dalam array data
function tambah() {
    let nama = document.getElementById("nama").value;

    // Memeriksa apakah input nama kosong
    if (nama === "") {
        alert("Nama tidak boleh kosong!");
        return;
    // agar pengguna tidak memasukan angka pada inputan nya
    }else if(/\d/.test(nama)){
        alert("Nama tidak boleh mengandung angka!");
        return;
    }

    // Menambahkan nama ke dalam array data
    data.push(nama);
    tampil(); // Memanggil fungsi tampil untuk memperbarui tampilan
    document.getElementById("nama").value = ""; // Mengosongkan input
}

// Fungsi untuk menampilkan daftar nama
function tampil(){
    let list = document.getElementById("list");
    list.innerHTML = ""; // Mengosongkan daftar sebelum menampilkan yang baru

    // Mengiterasi setiap item dalam array data dan menambahkannya ke daftar
    data.forEach((item, index) => {
        list.innerHTML += `
        <li>
            ${item}
            <button onclick="hapus(${index})">Hapus</button>
        </li>
        `;
    });
}

// Fungsi untuk menghapus nama dari daftar berdasarkan indeks
function hapus(index) {
    data.splice(index, 1); // Menghapus item dari array data
    tampil(); // Memanggil fungsi tampil untuk memperbarui tampilan
}