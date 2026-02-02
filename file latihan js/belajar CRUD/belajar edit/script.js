let data = [];

function tambah(){
    let nama = document.getElementById("nama").value;

    if (nama == ""){
        alert("nama tidak boleh kososng!!!");
    }else if(/\d/.test(nama)){
        alert("nama tidak boleh mengandung angka!!!");
    }

    data.push(nama);
    tampil();
    document.getElementById("nama").value = "";
}

function tampil(){
    let list =document.querySelector(".list-nama");

    list.innerHTML = "";
    data.forEach((item, index) =>{
        list.innerHTML +=`
        <li>
            <span>${item}</span>
            <button onclick="edit(${index})">edit</button>
        </li>
        `;
    });
}

function edit(index){
    let newNama = prompt("msukan nama baru:", data[index]);

    if (newNama == null){
        return;
    }else if (newNama == ""){
        alert("nama tidak boleh kososng!!!");
        return;
    }else if(/\d/.test(newNama)){
        alert("nama tidak boleh mengandung angka!!!");
        return;
    }
    data[index] = newNama;
    tampil();
}