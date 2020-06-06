let kalimat = 'nama saya pascal felim';
let kata = kalimat.split(' ');

//menampilkan data array menjadi data variabel satu per satu 
kata.forEach(element=>{
    console.log(element);
})

//proses for each lebih lambat dari pada map
//for each lebih disarankan utk tdk mengubah data array
//for each lebih disarankan utk menampilkan data
let newArr = kata.map(element=>{
    return 'test1 ' + element
})

console.log(newArr)
console.log(kata)