var validNIP = "290792";

function userValidation() {
    //console.log(document.getElementById("txt_nip").value);
    if(document.getElementById("txt_nip").value == validNIP){
        window.location.href = "cajero.html";
    }
    else {
        document.getElementById("alert_nip").style.display = "block";
    }
}