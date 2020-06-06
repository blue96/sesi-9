let username = []
let password = []
var txtUserName = document.getElementById("txtUserName");
var txtPassword = document.getElementById("txtPassword");
var txtDecryptPassword = document.getElementById("txtDecryptPassword");
var crypt = {
    secret : "CIPHERKEY",
    encrypt : function (clear){
    // encrypt() : encrypt the given clear text

      var cipher = CryptoJS.AES.encrypt(clear, crypt.secret);
      cipher = cipher.toString();
      return cipher;
    },

    decrypt : function (cipher) {
    // decrypt() : decrypt the given cipher text

      var decipher = CryptoJS.AES.decrypt(cipher, crypt.secret);
      decipher = decipher.toString(CryptoJS.enc.Utf8);
      return decipher;
    }
  };

function checkLenPass(text) {
    if (text.length >= 8){
        return true;
    } 
    else{
        return false;
    }
}

function checkLenUName(text) {
    if (text.length >= 6){
        return true;
    } 
    else{
        return false;
    }
}

const onSubmit = (event) => {
    event.preventDefault();
    if (checkLenUName(txtUserName.value) && checkLenPass(txtPassword.value)){
        username.push(txtUserName.value)
        password.push(crypt.encrypt(txtPassword.value))
        let text = ''
        for (let i = 0; i < username.length; i++){
           text = text + '<li> username : ' + username[i] + '</li>'
           text = text + '<li> password : ' + password[i] + '</li>'       
        }
        document.getElementById("hasil").innerHTML = text
    }
    else{
        alert('Username atau Password tidak memenuhi kriteria')
        txtUserName.value = ''
        txtPassword.value = ''
    }
}

const Decrypt = (event) => {
    event.preventDefault();
    alert('password decrypt = ' + crypt.decrypt(txtDecryptPassword.value))
}