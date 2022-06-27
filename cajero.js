var amount = 0;

class Billes {
    constructor(setName, setValue, setStock){
        this.name = setName;
        this.value = setValue;
        this.stock = setStock;
    }

    show() {
        if(this.stock > 0) {
            var child = "<div class='cashLst'><img alt='cashIcon' src='assets/cash_icon.png'><h4>"+this.value+"</h4></div>";
            document.getElementById("availableCash").innerHTML += child;
        }
    }
}

CashPetition = [];

collectionCash = [];

collectionCash.push(new Billes("mil", 1000, 8));
collectionCash.push(new Billes("quinientos", 500, 25));
collectionCash.push(new Billes("docientos", 200, 25));
collectionCash.push(new Billes("cien", 100, 30));
collectionCash.push(new Billes("cincuenta", 50, 5));
collectionCash.push(new Billes("veinte", 20, 6));



for(var cash of collectionCash) {
    cash.show();
}

function getCash(){
    userPetition = document.getElementById("txt_amount").value;
    var amount = parseInt(userPetition);
    var div = 0;
    var nCash = 0;

    if(collectionCash.length != 0 && amount > 0) {
        for (var cash of collectionCash) {
            if(amount > 0 && amount >= cash.value){
                div = Math.floor(amount/cash.value);
                if(div > cash.stock) {
                    nCash = cash.stock
                }
                else {
                    nCash = div;
                }                
                
                CashPetition.push(new Billes(cash.name, cash.value, nCash));
                amount = amount - (cash.value * nCash);
                cash.stock = cash.stock - nCash;
            }
            else {
                document.getElementById("alert_EmptyATM").style.display = "block";
            }
        }
        if(amount > 0) {
            document.getElementById("alert_EmptyATM").style.display = "block";
            CashPetition = [];
        }
        else {
            document.getElementById("pageHeader").style.display = "none"; 
            document.getElementById("userForm").style.display = "none"; 
            for(var d of CashPetition){
                var child = "<div class='petitionLst'><img alt='cashIcon' src='assets/cash_icon.png'><h4>"+d.value+" X "+d.stock+"</h4></div>";
                document.getElementById("petitionCashLst").innerHTML += child;
            }
            document.getElementById("petitionCash").style.display = "block"; 
            document.getElementById("txt_amount").value = "";
        }
    }
    else {
        document.getElementById("alert_EmptyATM").style.display = "block";
        CashPetition = [];
    }
}

function back() {
    document.getElementById("petitionCash").innerHTML = " ";
    document.getElementById("petitionCash").style.display = "none";
    document.getElementById("pageHeader").style.display = "block";
    document.getElementById("userForm").style.display = "block"; 
    window.location.href = "index.html";
}