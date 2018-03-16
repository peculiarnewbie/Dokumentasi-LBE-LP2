##LP2_16-3-2018_asynchronous

const Bluebird = require('bluebird')

function print(data, callback){
    setTimeout(function(){
        callback(data)
    }, 1000);
}

function tambah(data){
    return new Bluebird((resolve, reject) => {
        setTimeout(function(){
            resolve(data + data);
        }, 1000);
    })
}
 
function kali(data){
    return new Bluebird((resolve, reject) => {
        setTimeout(function(){
            resolve(data * data);
        }, 1000);
    })
}

function bagi(a,b){
    return new Bluebird((resolve, reject) => {
        setTimeout(function(){
            if (b==0) {
                reject('Pembagian oleh 0')
            }
            resolve(a / b);
        }, 1000);
    })
}

// const myFunc = async () => {
//     const x = await tambah(20);
//     const y = await kali(4);

//     console.log('async await: ' + x + ' ' + y);
// }

// myFunc();

tambah(10)
    .then((data) => {
        return kali(data);
    })
    .then((data) => {
        console.log('pertama: ' + data)
    });

Bluebird.all([tambah(10) , kali(2)])
.then((arr) => {
    console.log('kedua: ' + arr[0] + ' ' + arr[1]);
});

Bluebird.props({
    hasilTambah: tambah(10),
    hasilKali: kali(2)
})
    .then((data) => {
        console.log('ketiga: ' + data.hasilTambah + ' ' + data.hasilKali);
    })


bagi(10,5)
    .then((data) => {
        console.log('keempat: ' + data);
    })


//tambah("kucing" , print)
