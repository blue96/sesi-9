let angka = [3,5,7,9,11]

let newAngka = angka.map(element=>{
    return element * 5
})

document.getElementById('hasil').innerHTML = `Array Lama = ${angka} <br> Array Baru = ${newAngka}` ;

console.log('angka lama')
console.log(angka)
console.log('angka baru')
console.log(newAngka)