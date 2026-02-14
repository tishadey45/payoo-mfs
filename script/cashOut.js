document.getElementById("add-money-cards").addEventListener("click",function(){
    document.getElementById("cashout").style.display="none";
    document.getElementById("addmoney").style.display="block";
})

document.getElementById("cashout-cards").addEventListener("click",function(){
    document.getElementById("addmoney").style.display="none";
    document.getElementById("cashout").style.display="block";
})