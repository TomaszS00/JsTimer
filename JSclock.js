var wholeDate = document.getElementById("wholeDate");

function time(){
    var date = new Date();
    wholeDate.textContent = " ";
    var i = date.getMonth();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    

    var d = date.getUTCDate();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    
    //display day add 0 before number if it's below 10
    if( d < 10)
        wholeDate.textContent += "0" + d;
    else
        wholeDate.textContent += " " + d + " " + ":";


    wholeDate.textContent += " " + months[i];
    wholeDate.textContent +=  " " + date.getFullYear();

    
    

    

    //display hour add 0 before number if it's below 10
    if( h < 10)
        wholeDate.textContent += "0" + h + ":";
    else
        wholeDate.textContent += " " + h + ":";

    //display min add 0 before number if it's below 10
    if(m < 10)
        wholeDate.textContent += "0" + m + ":";
    else
        wholeDate.textContent += m + ":";   


    //display sec add 0 before number if it's below 10
    if(s < 10)
        wholeDate.textContent += "0" + s;
    else
        wholeDate.textContent += s;
    
    setTimeout(time, 1000);
   
}

time();

