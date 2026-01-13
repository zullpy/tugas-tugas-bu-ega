let cart = [];

document.querySelectorAll('.product-card').forEach(card => {
    const priceTag = card.querySelector('.price');
    const variant = card.querySelector('.variant');
    const order = card.querySelector('button');

    function updatePrice() {
        const price = variant.value === 'hot' ? card.dataset.hot : card.dataset.ice;
        priceTag.textContent = "Rp " + Number(price).toLocaleString();
    }

    if (variant) {
    updatePrice();
    variant.addEventListener('change', updatePrice);
    }


    order.addEventListener('click', () => {
    const item = {
        nama: card.querySelector('h2').textContent,
        tipe: variant ? variant.value : "-", 
        harga: variant
            ? (variant.value === 'hot' ? card.dataset.hot : card.dataset.ice)
            : (card.dataset.ice || 0) 
    };

        cart.push(item);
        updateCart();
    });
});


function updateCart() {
    const popupContent = document.querySelector('.popup-content');

    if (cart.length === 0) {
        popupContent.innerHTML = `
            <a href="" class="close">×</a>
            <h2>Pesanan Anda</h2>
            <p>Belum ada pesanan. Mulai pesan sekarang?</p>
        `;
        return;
    }

    let total = cart.reduce((sum, item) => sum + Number(item.harga), 0);

    popupContent.innerHTML = `
        <a href="" class="close">×</a>
        <h2>Pesanan Anda</h2>
        <ul class="cart-list">
            ${cart.map((item, i) => `
                <li>
                    ${item.nama} (${item.tipe}) - Rp ${Number(item.harga).toLocaleString('id-ID')}
                    <button class="hapus-item" data-id="${i}">×</button>
                    <br>
                    <br>
                </li>
            `).join("")}
        </ul>
        <p><b>Total:</b> Rp ${total.toLocaleString('id-ID')}</p>
        <button id="bayar-btn">Bayar Sekarang</button>
        <button id="hapus-semua">Hapus Semua</button>
    `;

    document.querySelectorAll('.hapus-item').forEach(btn => {
        btn.onclick = () => {
            cart.splice(btn.dataset.id, 1);
            updateCart();
        };
    });

    document.getElementById('hapus-semua').onclick = () => {
        cart = [];
        updateCart();
    };

    document.getElementById('bayar-btn').onclick = pilihPembayaran;
}


function pilihPembayaran() {
    Swal.fire({
        title: 'Metode Pembayaran',
        input: 'select',
        inputOptions: {
            qris: 'QRIS',
            cash: 'Cash',
            transfer: 'Transfer Bank'
        },
        inputPlaceholder: 'Pilih metode',
        showCancelButton: true
    }).then(result => {
        if (result.value) {
            Swal.fire({
                icon: 'success',
                title: 'Pembayaran Berhasil!',
                text: 'Terima kasih sudah memesan 😄'
            }).then(() => {
                cart = [];
                updateCart();
                // location.hash = ""; 
            });
        }
    });
}



const popup = document.querySelector(".popup");
const closeBtn = document.querySelector(".close");
const cartBtn = document.querySelector(".pesanan-btn");



cartBtn.addEventListener("click", () => {
    popup.classList.add("show");
});

closeBtn.addEventListener("click", () => {
    popup.classList.remove("show");
});

// klik area luar juga nutup
popup.addEventListener("click", e => {
    if (e.target === popup) popup.classList.remove("show");
});

function updateCart() {
    const cartBody = document.getElementById('cart-body');

    if (cart.length === 0) {
        cartBody.innerHTML = "<p>Belum ada pesanan 😢, silahkan pesan terlebih dahulu</p>";
        return;
    }

    let total = cart.reduce((sum, item) => sum + Number(item.harga), 0);

    cartBody.innerHTML = `
        <ul>
            ${cart.map((item, i)=>`
                <li class="cart-items">${item.nama} (${item.tipe}) - Rp ${Number(item.harga).toLocaleString('id-ID')}
                <button onclick="hapusItem(${i})">×</button>
                <br><br>
                </li>
            `).join("")}
        </ul>
        <p><b>Total:</b> Rp ${total.toLocaleString('id-ID')}</p>
        <button onclick="pilihPembayaran()" class="BS">Bayar Sekarang</button>
        <button onclick="hapusSemua()">Hapus Semua</button>
    `;
}

function hapusItem(i){ cart.splice(i,1); updateCart(); }
function hapusSemua(){ cart = []; updateCart(); }


// function pilihPembayaran() {
//     Swal.fire({
//         title: 'Metode Pembayaran',
//         input: 'select',
//         inputOptions: {
//             qris: 'QRIS',
//             cash: 'Cash',
//             transfer: 'Transfer Bank',
//             shopeepay: 'ShopeePay',
//             gopay: 'GoPay',
//             dana: 'Dana',
//         },
//         inputPlaceholder: 'Pilih metode',
//         confirmButtonText: 'Bayar',
//         showCancelButton: true
//     }).then(result => {
//         if (result.value) {
//             Swal.fire({
//                 icon: 'success',
//                 title: 'Pembayaran Berhasil!',
//                 text: `Metode: ${result.value.toUpperCase()}`
//             }).then(() => {
//                 cart = [];
//                 updateCart();
//                 document.querySelector(".popup").classList.remove("show");
//             });
//         }
//     });
// }


const paymentData = {
    qris: {
        type: "QRIS",
        image: "asset/qris.jpeg" 
    },
    dana: {
        type: "DANA",
        number: "0812-3456-7890"
    },
    gopay: {
        type: "GoPay",
        number: "0812-3456-7890"
    },
    ovo: {
        type: "OVO",
        number: "0812-3456-7890"
    },
    shopeepay: {
        type: "ShopeePay",
        number: "0812-3456-7890"
    },
    transfer: {
        type: "Transfer Bank",
        number: "BCA - 1234567890 a.n Coffee Toffee"
    },
    cash: {
        type: "Cash"
    }
};

function pilihPembayaran() {
    Swal.fire({
        title: 'Metode Pembayaran',
        input: 'select',
        inputOptions: {
            qris: 'QRIS',
            cash: 'Cash',
            transfer: 'Transfer Bank',
            shopeepay: 'ShopeePay',
            gopay: 'GoPay',
            dana: 'DANA',
            ovo: 'OVO'
        },
        inputPlaceholder: 'Pilih metode pembayaran',
        confirmButtonText: 'Lanjut',
        showCancelButton: true
    }).then(result => {
        if (!result.value) return;

        const pay = paymentData[result.value];

        if (pay.image) {
            Swal.fire({
                title: `${pay.type}`,
                html: `<img src="${pay.image}" style="width:250px; border-radius:12px;">`,
                confirmButtonText: 'Saya sudah bayar'
            }).then(() => selesaiBayar());
            return;
        }

        if (pay.number) {
            Swal.fire({
                title: `${pay.type}`,
                html: `
                    <p>Silakan transfer ke nomor berikut:</p>
                    <h2>${pay.number}</h2>
                `,
                confirmButtonText: 'Saya sudah bayar'
            }).then(() => selesaiBayar());
            return;
        }

        selesaiBayar();
    });
}

function selesaiBayar() {
    Swal.fire({
        icon: 'success',
        title: 'Pembayaran Berhasil!',
        text: 'Terima kasih sudah memesan 😄'
    }).then(() => {
        cart = [];
        updateCart();
        document.querySelector(".popup").classList.remove("show");
    });
}

