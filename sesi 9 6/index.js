let tweet = []
let kata = ''
var txtKata = document.getElementById("txtKata");
var batasText = document.getElementById("batasText");
 

const onSubmit = (event) => {
    event.preventDefault();
    if (txtKata.value.length <= 140){
        let txtKalimat = document.getElementById('txtKata').value;
        tweet.push(txtKalimat)
        let kata = ''
        tweet.forEach(element=>{
            kata = kata + element + '<br>';
        })
        s = "";
        batasText.innerText = 140-s.length + '/140';
        document.getElementById("txtKata").value = "";
        document.getElementById('hasil').innerHTML = kata;
    
    }
    else {
        alert('character melebihi kapasitas')
    }
}

const onChange = () => {
    var s = txtKata.value;
    batasText.innerText = 140-s.length + '/140';
}