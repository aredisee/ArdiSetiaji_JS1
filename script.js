// 1. IF
let nama = prompt("Apa Nama Panggilanmu?");

if (nama) {
    alert("Hai! "+nama+ ", Salam Kenal.")
}


// 2. IF ELSE
let harga = prompt("Berapa Harga Pulpenmu? ");

if (harga <= 5000 ) {
    alert("Wah! Murah Sekali Pulpenmu!");
} else{
    alert("Mahal Sekali Pulpenmu!");
}


// 3.  ELSE IF
let nilai = prompt("Berapa Rata-rata Nilaimu? ");

if (nilai <= 100 && nilai >= 81) {
    alert("Nilai " +nilai+ " berkategori A");
} else if (nilai <= 80 && nilai >= 71) {
    alert("Nilai " +nilai+ " berkategori B");
} else if (nilai <= 70 && nilai >= 61) {
    alert("Nilai " +nilai+ " berkategori C");
} else if (nilai <= 60 && nilai >= 51) {
    alert("Nilai " +nilai+ " berkategori D");
} else if (nilai <= 50) {
    alert("Nilai " +nilai+ " berkategori E");
} else {
    alert("Nilai tidak Sesuai!");
}


// 4. NESTED IF
let umur = prompt("Umurmu Berapa Tahun?");

if (umur <= 5) {
    alert("Kamu Masih Balita")
} else if (umur >= 6 && umur <= 18) {
    let sekolah = prompt("Kamu Masih Sekolah? (y/n)");
    if (sekolah === "y") {
        alert("Semangat Sekolahnya!");
    } else {
        alert("Kamu Bisa Belajar Dimanapun Ya!");
    }
} else if (umur >= 19) {
    let kerja = prompt("Apakah Kamu Sudah Bekerja? (y/n)");
    if (kerja === "y") {
        alert("Semangat Kerjanya!");
    } else {
        let kuliah = prompt("Apakah Kamu Sedang Kuliah? (y/n)");
        if (kuliah === "y") {
            alert("Semangat Kuliahnya!");
        } else {
            alert("Semangat Cari Kerjanya!");
        }
    }
}


// 5. SWITCH CASE
let warna = prompt("Apa Warna Favoritmu?");

switch(warna) {
    case "merah":
        alert("Merah itu Berani");
        break;
    case "kuning":
        alert("Kuning itu Kreatif");
        break;
    case "hijau":
        alert("Hijau itu Tenang");
        break;
    case "biru":
        alert("Biru itu Tulus");
        break;
    case "hitam":
        alert("Hitam itu Tegas");
        break;
    case "putih":
        alert("Putih itu Murni");
        break;
}


// 6. FOR
alert("Bantu Aku Merapihkan 5 Piring ini!");

for (let i = 1; i <=5; i++) {
    alert("Piring ke "+i+" masukan ke rak!");
}
alert("Yeay!, 5 Piring Tersusun Rapi");


// 7. WHILE
let ulangi = confirm("Apakah Mau Mencoba Perulangan?");
let counter = 0;

while(ulangi) {
    counter++;
    ulangi = confirm("Sudah diulang sebanyak "+ counter +" kali\n"+"Apakah mau dicoba lagi?");
}


// 8. DO WHILE
let i = 1;
alert("Induk Ayam Menetaskan 3 Telur!");

do
{
   alert("Anak Ayam Ke-"+i+" mengikuti induknya.");
   i++;
}
while (i<=3)


// 9. FUNCTION
alert("Aku Bisa Menghitung Luas Segitiga Loh!");
let alas = prompt("Berapa Lebar Alasnya?");
let tinggi = prompt("Berapa Tingginya?");

function luasSegitiga(alas,tinggi) {
    return 0.5*alas*tinggi;
}

alert("Luas Segitiganya adalah "+luasSegitiga(alas,tinggi)+" m^2");