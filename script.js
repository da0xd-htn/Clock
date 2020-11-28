function clock(){
    var oobject = new Date();
    var time = document.getElementById("time");
time.innerHTML = oobject.getHours() + ":" +  oobject.getMinutes() + ":" + oobject.getSeconds();
    var date = document.getElementById("date");
date.innerHTML = oobject.getDate() + "-" +  parseInt(oobject.getMonth()+1) + "-" +   oobject.getFullYear() 
}



setInterval(clock,100);

function getclolor(){

var colorValue = document.getElementById("input").value;

localStorage.setItem("color",colorValue);
document.getElementById("body").style.backgroundColor = localStorage.getItem("color");

document.getElementById("time").style.backgroundColor = localStorage.getItem("color");


}




