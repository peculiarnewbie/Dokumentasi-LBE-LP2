## Callback, Promise / Bluebird, Async

Fungsi-fungsi diatas berguna untuk **meminta hasil** dari suatu fungsi yang **membutuhkan waktu** untuk berjalan dan mengembalikan hasil.
Karena program javascript menjalankan fungsi2 dalam script sekaligus, maka perintah assignment terkadang dilakukan dari fungsi yang belum selesai memberi hasil, maka fungsi-fungsi asynchronous ini berguna untuk mencegah terjadinya hal tersebut.
NB: *jangan gunakan callback*

### contoh fungsi yang menggunakan timeout dan fungsi bluebird

function tambah(data){
    return new Bluebird((resolve, reject) => {
        setTimeout(function(){
            resolve(data + data);
        }, 1000);
    })
}

fungsi setTimeout di fungsi ini berguna untuk mensimulasikan fungsi agar berjalan selama 1000 milisekon sebelum mengembalikan hasil
fungsi diatas juga menggunakan bluebird dimana fungsi akan mengembalikan data ke bluebird sampai dipanggil.

### contoh pemanggilan fungsi yang menggunakan bluebird
tambah(10)
    .then((data) => {
        return kali(data);
    })
    .then((data) => {
        console.log('pertama: ' + data)
    });
    
diatas kita memanggil fungsi *tambah* dengan data 10, lalu kita menggunakan fungsi *then* untuk menunggu fungsi menyelesaikan kalkulasi. Lalu kita melanjutkan dengan fungsi kali dengan data yang diadapat dari fungsi tambah. dan terakhir kita mengoutput hasil tambah dan kali ke console 
