//Program perhitungan akar pangkat 2 bilangan ganjil
//Isi angka yang diinginkan
const prompt = require('prompt-sync')({sigint: true});
const angka = prompt('Ketik angka yang diinginkan: ');
//apabila bilangan negatif
if (angka < 0 ){
    console.log('Tidak bisa input bilangan negatif')
}
//jika bilangan genap
else if (angka % 2==0){
    console.log('akar pangkat 2 bilangan genap =');
    console.log(Math.sqrt(angka));
}
//apabila bilangan ganjil
else {
console.log('Tidak bisa input bilangan ganjil');
}
