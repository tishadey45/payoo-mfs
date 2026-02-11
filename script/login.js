document.getElementById("login-btn").addEventListener("click", function(event){
event.preventDefault();
const accountNumber=document.getElementById("account-number").value;
const pin=document.getElementById("pin").value;
const convertedPin=parseInt(pin) //pin ke numbere convert korci // 
if(accountNumber.length===11){
    if(convertedPin===1234){ //1234 ke "" diye string kora jeto //
   window.location.href="./main.html"
    }else{
        console.log("pin tik nai");
    }
}else{
    console.log("need valid account number");
}
})