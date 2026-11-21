const tombolTema = document.getElementById('btn-tema');
tombolTema.addEventListener('click', function() {
    document.body.classList.toggle('mode_gelap');
});


const tombolSapa = document.getElementById('btn-sapa');
const inputNama = document.getElementById('input-nama');
const outputNama = document.getElementById('hasil-sapa');

tombolSapa.addEventListener('click', function() {
    const nama = inputNama.value;

    outputNama.textContent = `Halo, ${nama}! Selamat berlatih LKS.`;
    if (nama === "") {
        outputNama.textContent = 'Nama tidak boleh kosong!';
    }
});

const inputTugas = document.getElementById('input-tugas');
const tombolTugas = document.getElementById('btn-tambah');
const daftarTugas = document.getElementById('daftar-tugas');

tombolTugas.addEventListener('click', function(){
    const tugas = inputTugas.value;

    if (tugas.trim() === ""){
        alert("Tolong isi tugas terlebih dahulu");
    }else {
        const listBaru = document.createElement('li');
        listBaru.textContent = tugas;
        daftarTugas.appendChild(listBaru);
        inputTugas.value = "";
    }
});