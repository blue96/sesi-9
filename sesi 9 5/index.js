let arr1 = ['Math','English','Programming'];
let arr2 = ['Geography','spanish','Programming'];
let hasil = [];

for (let index = 0; index < arr1.length; index++) {
    hasil[index] = arr1[index] == arr2[index];
}
console.log(hasil)

let text = ''
for (let index = 0; index < arr1.length; index++) {
    text = text + '<li>' + arr1[index] + ' and ' + arr2[index] + ' = ' + hasil[index] + '</li>';
}

document.getElementById('hasil').innerHTML = text;