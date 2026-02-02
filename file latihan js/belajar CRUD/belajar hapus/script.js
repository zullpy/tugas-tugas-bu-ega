let data = [];

function tambah(){
    let nama = document.getElementById("nama").value;

    if (nama === "") {
        alert("input tidak boleh kosong!!");
        return;
    }else if (/\d/.test(nama)) {
        alert("nama tidak boleh mengandung angka!!");
        return;
    }

    data.push(nama);
    tampil();
    document.getElementById("nama").value = "";
}

function tampil(){
    let list = document.querySelector(".list-nama");
    list.innerHTML = "";

    data.forEach((item, index) => {
        list.innerHTML += `
        <li>
            <span>${item}</span>
            <button onclick="hapus(${index})">hapus</button>
        </li>
        `;
    });
}

function hapus(index){
    if(confirm("anda yakin hapus data ini?")){
        data.splice(index, 1);
        tampil();
    }else{
        return;
    }
}