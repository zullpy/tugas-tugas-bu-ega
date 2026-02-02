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
    } else if (/\d/.test(nama)) {
        alert("Nama tidak boleh mengandung angka!");
        return;
    }

    // Menambahkan nama ke dalam array data
    data.push(nama);
    tampil(); // Memanggil fungsi tampil untuk memperbarui tampilan
    document.getElementById("nama").value = ""; // Mengosongkan input
}

// Fungsi untuk menampilkan daftar nama
function tampil() {
    let list = document.getElementById("list");
    list.innerHTML = ""; // Mengosongkan daftar sebelum menampilkan yang baru

    // Mengiterasi setiap item dalam array data dan menambahkannya ke daftar
    data.forEach((item, index) => {
        list.innerHTML += `
        <li>
            <span>${item}</span>
            <div class="button-group">
                <button onclick="hapus(${index})" class="hapus">Hapus</button>
                <button onclick="edit(${index})" class="edit">Edit</button>
            </div>
        </li>
        `;
    });
}

// Fungsi untuk menghapus nama dari daftar berdasarkan indeks
function hapus(index) {
    Swal.fire({
        title: "Apakah anda yakin?",
        text: "kamu tidak bisa mengembalikannya",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "rgb(31, 184, 26)",
        cancelButtonColor: "rgb(228, 29, 29)",
        confirmButtonText: "Ya, hapus saja!"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Deleted!",
                text: "Data berhasil dihapus.",
                icon: "success"
            });
            data.splice(index, 1); // Menghapus item dari array data
            tampil(); // Memanggil fungsi tampil untuk memperbarui tampilan
        }
    });
}

// fungsi untuk tombol edit
function edit(index){
    let newName = prompt("Masukkan nama baru:", data[index]);
    
    if (newName === null) {
        return; // Jika pengguna membatalkan prompt
    } else if (newName === "") {
        alert("Nama tidak boleh kosong!");
        return;
    } else if (/\d/.test(newName)) {
        alert("Nama tidak boleh mengandung angka!");
        return;
    }
    data[index] = newName; // Memperbarui nama pada indeks yang diberikan
    tampil(); // Memanggil fungsi tampil untuk memperbarui tampilan
}

function hapusSemua(){
    if(data.length === 0){
        alert("Tidak ada data untuk dihapus!");
        return;
    }

    Swal.fire({
        title: "Apakah anda yakin?",
        text: "kamu tidak bisa mengembalikannya",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "rgb(31, 184, 26)",
        cancelButtonColor: "rgb(228, 29, 29)",
        confirmButtonText: "Ya, hapus semua!"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Deleted!",
                text: "Semua data berhasil dihapus.",
                icon: "success"
            });
            data = []; // Mengosongkan array data
            tampil(); // Memanggil fungsi tampil untuk memperbarui tampilan
        }
    });
}