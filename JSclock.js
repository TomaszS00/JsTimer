// var year = document.getElementById("year");
// var month = document.getElementById("month");
// var day = document.getElementById("day");
// var hours = document.getElementById("hours");
// var min = document.getElementById("minutes");
// var sec = document.getElementById("seconds");
var wholeDate = document.getElementById("wholeDate");

function time(){
    var date = new Date();
    // year.textContent = date.getFullYear();
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

    // month.textContent = months[i];
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


    // var logo = document.querySelector("img");

    // if(h < 12)
    //     logo.src = "cat.jpg";
    // else
    //     logo.src = "evening.jpg";
    
    
    

    setTimeout(time, 1000);
   
}

time();

