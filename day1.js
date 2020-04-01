//................1.1. Info.....................
// segala file back-end diakhiri dengan js.
// sumber: MODULE 1 BACK-END: INTRODUCTION NODE.JS

//................1.2. Sejarah.....................
// Dulu Javascript (atau Js) hanya bisa dipakai u/front-end 
// Dulu nulis Js harus pakai html, dan lihat hasilnya di di dalam web browser (masih ingat klik kanan-->inspect?)
// Node.js buat Js jalan di back-end (atau bisa disebut juga: sisi server)
// Kita sdh biasa bikin node.js waktu di front end.
// contoh:
    //console.log ('Hallo')     --> kita tulis di visual code.
    //                          --> buka TERMINAL & tulis node day1(/ nama file yang lain)
    //                          --> muncul tulisan Hallo di bawahnya.
    //                          --> TERMINAL itu sebenarnya = server

//................2.1. Beda Js(Front-End) dg program Back-End .....................

// Javascript = single thread   --> semuanya harus antri dulu u/jalanin perintah baris-per baris (dari atas ke bawah, kiri ke kanan)
    // * Dia hanya punya satu jalur
    // * Cepet jalannya {kalau kita node day1 langsung keluar perintah console.log("Hallo")}
    // * Tak bisa buat user banyak (sampai jutaan seperti Tokopedia)
    // * Bisa bebanin processor komputernya (*BOOM*)
    // * kalau buat data (tulis var a=5-->enter) TAK BISA mengatur simpannya di RAM bagian mana.

// Beda dengan: Golang, Ruby, node.js (ini semua back-end)
    // * Mereka punya multi-thread (kalau ada applikasi yg ambil data user yg bejibun banyaknya,pakai ini)
    // * Microservices (nanti lebih tahu lagi kegunaannya waktu belajar / buka youtube aja)
    // * kalau buat data,  BISA mengatur simpannya di RAM bagian mana.

//................2.2. Synchronous vs Asynchronous .....................

// Synchronous --> sesuai urutan (dari no.1 ke no. 2) (blocking)
// asynchronous --> tidak sesuai urutan (dari no.1 bisa saat bersamaan jalanin no. 2) (non-blocking)
// contoh:
    // setInterval (()=>{
    //     console.log ('ini timeout)   -->2. Keluar belakangan (Setelah 1 detik keluar perintahnya)
    // },1000)
    //console.log ('Hallo')             -->1. yang keluar ini dulu.

//................2.3.1. Promise .....................
// * Async memerlukan call back --> function dlm function dlm function(kebanyakan callback) jadinya callback hell
// * Callback (function dlm function) 
// * Baca callback : apa yang bakal dijalankan jika perintah async itu sudah selesai? 

// * Contoh 1: (comment contoh 2nya)
// let janji = new Promise((tepati, ingkari)=>{
//     let dipenuhi = true;
//     if(dipenuhi){
//         tepati ('I promised. masuk ke .then')    // dlm bentuk string
//     }else {
//         ingkari ("I lied. masuk ke .err")
//     }   
// });
// janji.then((res)=>{                     // Promise punya method / fungsi then
//     console.log(res)                    //--> keluar 'janji ditepati'
// }).catch((err)=>{
//     console.log(err)                    //--> keluar yang 'janji kuingkari'
// })

// * Contoh 2: (comment yang contoh 1, dipakai juga untuk async await dan module.exports)
let janji = new Promise((tepati, ingkari)=>{
    let dipenuhi = false;
    if(dipenuhi){
        tepati({                             //dlm bentuk array of obj.
            haihai:['i promise, msk ke .then!']
            //tepati itu kayak res (yang biasa dibuat waktu axios), masuk ke data(haihai), data itu berupa array, yang adalah array ke [0]. Makanya di index ada, menunggu.data[0].

        })
    }else {
        ingkari ("i lied, masuk ke .err")
    }   
});
janji
.then((res1)=>{                     
    console.log('isi res1: ',res1.haihai)// Biasanya res.data. Kucoba yg lain
    return res1.haihai                  
    }).then((res2)=>{                   // Bisa tambah .then lagi
        console.log('isi res2: ',res2)               // Hasil return res1.haihai ada di res2
    })
.catch((err)=>{
    console.log(err)                    //--> keluar yang 'I lied'
})

//................2.4. Codingan yg biasa di Back-End .....................
// try {
//     console.loog('insert')  // sengaja error
// } catch (error) {
//     console.log('error')
// }
// console.log('sesuatu')      // kalau pakai try catch, meskipun err, yg bawah tetap dibaca
//                             // kenapa? Kalau servernya mati......... akan dijelaskan lebih lanjut oleh kak Dino


//................2.3.2. Promise Tingkat Lanjut (await).....................

// const tespromise = async () => {    // async tanpa 'await' bisa dipakai
//     try {
//         const menunggu=await janji // kalau ada await pasti ada async (await = menunggu / menantikan. Menantikan apa? si data (janji).Baca: Aku akan menunggu janji baru jalan)
//                                     // kalau gak ada await, hasilnya undefined krn gak di tunggu si janji selesai, jadi const menunggu gak ada isinya.
//         console.log('ini dari tespromise',menunggu.haihai[0])
//     } catch (error) {
//         console.log('masuk error tespromise')
//         console.log('catch error',error)
//     }
// }
// tespromise()
// console.log('sesuatu')

//................3.1.Export Import-String.....................
// var nama='Dino';
// module.exports=nama  // hanya boleh ada 1 module.exports. Sama kayak export default react

//................3.2.Export Import-object(data hanya 1).....................
// var nama='Putri'
// module.exports={        
//     nama
// }                

//................3.3.Export Import-object(data + function).....................

// var nama='Putri'
// module.exports={                            // kalau data banyak, pakai object
//     nama,
//     namaSaya: () =>{
//         return 'nama saya adalah: ' + nama
//     }
// }

//................3.4.Export Import-object(data + function + promise).....................
var nama='Theodora'
module.exports={                            
    nama,
    namaSaya: () =>{
        return 'nama saya adalah: ' + nama
    },
    promis: janji                          // masukin janji dr contoh 2 bagian 2.3.1
}      


