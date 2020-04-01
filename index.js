//................3.1.Export Import-String.....................
// const Nama = require('./day1')               // nama constnya bebas
// console.log(Nama)                            // jangan lupa di console.log


//................3.2.Export Import-object(data hanya 1).....................
// const myName = require('./day1')                // karena masih 1 paramsnya, tak usah pakai {}  
// console.log(myName)                             // Jangan lupa di console.log.

//................3.3.Export Import-object(data + function).....................
// const {nama, namaSaya} = require ('./day1')         // pakai distractring, nama ikutin dari modulenya
// console.log(namaSaya())                             // --> Nama saya adalah Putri

//................3.4.Export Import-object(data + function + promise).....................
const {nama, namaSaya,promis} = require ('./day1')         // pakai distractring, nama ikutin dari modulenya
console.log(nama)

const tespromise= async ()=>{                               // ini async, karenanya urutan console.log di bawaah
    try {
        const menunggu= await promis             
        console.log (menunggu.haihai[0])                    // haihai yang dari day1
    } catch (error) {
        console.log('masuk sini')
        console.log('tespromise error',error)               // error itu masuknya ke "I lied"
    }
}
tespromise()
console.log(namaSaya())