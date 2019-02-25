//Interface logic

$(document).ready(function () {
  $("form#logik").submit(function (event) {
    event.preventDefault();
    var number1 = parseInt($("input:radio[name=html]:checked").val());
    var number2 = parseInt($("input:radio[name=css]:checked").val());
    var number3 = parseInt($("input:radio[name=javascript]:checked").val());
    var number4 = parseInt($("input:radio[name=html2]:checked").val());
    var finalnumber = parseInt((number1 + number2 + number3 + number4));
    $("#output1").text(finalnumber);

  });
});
