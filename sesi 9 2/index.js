let seksi = ['SOH','SRO','SRP','SCA','SCO']


document.getElementById('lengthDataArray').innerHTML = `Panjang Data Array = ${seksi.length}`
document.getElementById('dataArray').innerHTML = `Data Array = ${seksi}`
let text = '';
seksi.forEach(element=>{
    text = text + '<li>' + element + '</li>'
})
document.getElementById('hasil').innerHTML = text;
console.log(seksi)