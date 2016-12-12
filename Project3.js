//Juan Martinez
function test(){
var answer= document.getElementById("Q1").value;
console.log(answer);
if(answer == 4 ){
  document.getElementById("Correct").innerHTML="Well Done!";
  document.getElementById("Correct").classList.remove("hidden-message");
  document.getElementById("Correct").classList.add("shown-message");
  setCookie("prescore1", 1 , 100);
}
else if(answer < 4 ){
document.getElementById("Correct").innerHTML = "Sorry, check the soccer lesson and try again...";
document.getElementById("Correct").classList.remove("hidden-message");
document.getElementById("Correct").classList.add("shown-message");
}
else if(answer > 4 ){
document.getElementById("Correct").innerHTML = "Sorry, check the soccer lesson and try again...";
document.getElementById("Correct").classList.remove("hidden-message");
document.getElementById("Correct").classList.add("shown-message");
}
}


function test2(){
var answer2= document.getElementById("Q2").value;
console.log(answer2);
if(answer2 == 51 ){
  document.getElementById("Correct").innerHTML="Well Done!";
  document.getElementById("Correct").classList.remove("hidden-message");
  document.getElementById("Correct").classList.add("shown-message");
  setCookie("prescore2", 1 , 100);
}
else if(answer2 < 51 ){
document.getElementById("Correct").innerHTML = "Sorry, check the football lesson and try again try again...";
document.getElementById("Correct").classList.remove("hidden-message");
document.getElementById("Correct").classList.add("shown-message");
}
else if(answer2 > 51 ){
document.getElementById("Correct").innerHTML = "Sorry, check the football lesson and try again try again...";
document.getElementById("Correct").classList.remove("hidden-message");
document.getElementById("Correct").classList.add("shown-message");
}
}


function test3(){
var answer3= document.getElementById("Q3").value;
console.log(answer3);
if(answer3 == 1908 ){
  document.getElementById("Correct").innerHTML="Well Done!";
  document.getElementById("Correct").classList.remove("hidden-message");
  document.getElementById("Correct").classList.add("shown-message");
  setCookie("prescore3", 1 , 100);
}
else if(answer3 < 1908 ){
document.getElementById("Correct").innerHTML = "Sorry, check the baseball lesson and try again...";
document.getElementById("Correct").classList.remove("hidden-message");
document.getElementById("Correct").classList.add("shown-message");
}
else if(answer3 > 1908 ){
document.getElementById("Correct").innerHTML = "Sorry, check the baseball lesson and try again...";
document.getElementById("Correct").classList.remove("hidden-message");
document.getElementById("Correct").classList.add("shown-message");
}
}


function test4(){
var answer4= document.getElementById("Q4").value;
console.log(answer4);
if(answer4 == 100 ){
  document.getElementById("Correct").innerHTML="Well Done!";
  document.getElementById("Correct").classList.remove("hidden-message");
  document.getElementById("Correct").classList.add("shown-message");
  setCookie("prescore4", 1 , 100);
}
else if(answer4 < 100 ){
document.getElementById("Correct").innerHTML = "Sorry, check the basketball lesson and try again...";
document.getElementById("Correct").classList.remove("hidden-message");
document.getElementById("Correct").classList.add("shown-message");
}
else if(answer4 > 100 ){
document.getElementById("Correct").innerHTML = "Sorry, check the basketball lesson and try again...";
document.getElementById("Correct").classList.remove("hidden-message");
document.getElementById("Correct").classList.add("shown-message");
}
}

function calculatescore()
{
var score1 = Number(getCookie("prescore1"));
var score2 = Number(getCookie("prescore2"));
var score3 = Number(getCookie("prescore3"));
var score4 = Number(getCookie("prescore4"));
var results = score1 + score2 + score3 + score4;
results = results / 4 * 100;
document.getElementById("Fsc").innerHTML= asPercentage(results);
}


function asPercentage(val)
{
return "%" + val.toFixed(2);
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function AboutCreator()
{
var AboutCreator = ["My favorite sports teams are the Lakers, Eagles, Angels, and Chelsea", "I still play soccer"
 , "This was my first programming class, I really enjoyed it and I  hope you enjoy this webpage I built" ];
 var math = Math.floor(Math.random()*AboutCreator.length);
 document.getElementById("me").innerHTML=AboutCreator[math];

}
