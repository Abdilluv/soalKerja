// SOAL PERTAMA
// function tinggiPohon(tinggiAwalPohon, lamaHari, pertembuhanHarian) {
//     let tinggi = tinggiAwalPohon;

//     for (let hari = 1; hari <= lamaHari; hari++) {
//         tinggi *= (1 + pertembuhanHarian / 100);
//     }

//     return tinggi;
// }

// const tinggiAwalPohon1 = 200;
// const lamaHari1 = 5;
// const tumbuhHari1 = 5;

// const result1 = tinggiPohon(tinggiAwalPohon1, lamaHari1, tumbuhHari1);
// console.log(`Contoh 1: Tinggi pohon setelah ${lamaHari1} hari adalah ${result1.toFixed(4)}`);

// const tinggiAwalPohon2 = 250;
// const lamaHari2 = 2;
// const tumbuhHari2 = 2;

// const result2 = tinggiPohon(tinggiAwalPohon2, lamaHari2, tumbuhHari2);
// console.log(`Contoh 2: Tinggi pohon setelah ${lamaHari2} hari adalah ${result2.toFixed(1)}`);

// SOAL KEDUA
// function buatPiramida(tinggi) {
//     for (let i = 0; i < tinggi; i++) {
//       let bintang = '*'.repeat(i * 2 + 1);
//       let spasi = ' '.repeat(tinggi - i - 1);
  
//       let baris = '/' + spasi + bintang + spasi + '\\';
  
//       console.log(baris);
//     }
//   }
  
//   buatPiramida(3);
//   buatPiramida(5);
  
// SOAL KETIGA
// const kata1 = "imagination";
// const kata2 = "association";

// function jenisKata(kata) {
//     const kataKetemu = new Set();
//     const result = [];

//     for (const karakter of kata) {
//         if (!kataKetemu.has(karakter)) {
//             kataKetemu.add(karakter);
//             result.push(karakter);
//         }
//     }

//     return result.join('');
// }

// console.log(`Contoh 1: ${jenisKata(kata1)}`);
// console.log(`Contoh 2: ${jenisKata(kata2)}`);

// SOAL KE EMPAT
// function hitungDiskonDanBonus(hargaProduk) {
//     // Menghitung total harga
//     const totalHarga = hargaProduk.reduce((total, harga) => total + harga, 0);

//     // Inisialisasi diskon dan bonus
//     let diskon = 0;
//     let bonus = "";

//     // Menentukan diskon dan bonus sesuai ketentuan
//     if (totalHarga > 70000 && totalHarga <= 200000) {
//         diskon = 5;
//         bonus = "topi";
//     } else if (totalHarga > 200000 && totalHarga <= 400000) {
//         diskon = 7;
//         bonus = "payung";
//     } else if (totalHarga > 400000) {
//         diskon = 10;
//         bonus = "ransel";
//     }

//     // Menghitung nilai diskon
//     const nilaiDiskon = (totalHarga * diskon) / 100;
//     // Menghitung harga setelah diskon
//     const hargaSetelahDiskon = totalHarga - nilaiDiskon;

//     return {
//         totalHarga: totalHarga,
//         diskon: nilaiDiskon,
//         bonus: bonus,
//         hargaSetelahDiskon: hargaSetelahDiskon,
//     };
// }

// const hargaProduk1 = [2000, 50000, 100000];
// const hasil1 = hitungDiskonDanBonus(hargaProduk1);
// console.log(`Contoh 1\nTotal Harga: ${hasil1.totalHarga}`);
// console.log(`Diskon: ${hasil1.diskon}`);
// console.log(`Bonus: ${hasil1.bonus}`);
// console.log(`Harga Akhir: ${hasil1.hargaSetelahDiskon}`);


// SOAL KELIMA
// function solution(noAkun, nominal) {
//     let totalDebit = 0;
//     let totalKredit = 0;
  
//     console.log("#AKUN # DEBIT # KREDIT");
  
//     for (let i = 0; i < noAkun.length; i++) {
//       let akun = noAkun[i];
//       let debit = 0;
//       let kredit = 0;
  
//       if (akun.toString().startsWith("1")) {
//         debit = nominal[i] > 0 ? nominal[i] : 0;
//       } else if (akun.toString().startsWith("2")) {
//         kredit = nominal[i] < 0 ? Math.abs(nominal[i]) : 0;
//       }
  
//       console.log(`${akun} - ${debit} - ${kredit}`);
  
//       totalDebit += debit;
//       totalKredit += kredit;
//     }
  
//     console.log("\n#total", `#${totalDebit}`, `#${totalKredit}`, totalDebit === totalKredit ? "(balance)" : "(Not Balance)");
//   }
  
//   solution([111, 211, 201], [200000, 50000, 150000]);
//   console.log("\n");
//   solution([111, 201], [100000, -120000]);
  