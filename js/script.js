var maxi = 40
var total = 100
var percentage = function(finalnumber, maxi, total) {
  return (finalnumber / maxi) * total
}
$(document).ready(function() {
  $("form#logik").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("input:radio[name=html]:checked").val());
    var number2 = parseInt($("input:radio[name=css]:checked").val());
    var number3 = parseInt($("input:radio[name=javascript]:checked").val());
    var number4 = parseInt($("input:radio[name=html2]:checked").val());
    var finalnumber = parseInt(number1 + number2 + number3 + number4);
    $("#output1").text(finalnumber);
    var scores = percentage(finalnumber, maxi, total)
    $("#output1").text(scores + " %");

    if (scores >= 75) {
      $("#output2").text("EXCELLENT");
    } else if (scores <= 65) {
      $("#output2").text("AVERAGE");
    } else if (scores >= 50) {
      $("#output2").text("FAIR");
    } else {
      $("output2").text("FAIL");
    }

  });
});
