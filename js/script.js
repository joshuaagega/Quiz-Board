//Interface logic

$(document).ready(function(){
$("form#logik").submit(function(event) {
event.preventDefault();
 var number1 = parseInt ($("input:radio[name=html]:checked").val());
 var number2 = parseInt ($("input:radio[name=css]:checked").val());
 var number3 = parseInt ($("input:radio[name=JavaScript]:").val());
