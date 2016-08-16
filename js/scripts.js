$(function(){

  $(".countingUp button").click(function(event){
    var num1 = parseInt($(".countingUp .countTo").val());
    var num2 = parseInt($(".countingUp .countBy").val());
    var pass = "passed";
    $(".countingUp .displayResult").empty();

    //Tests that the second number undefined, NaN, empty string (""), 0, false
      if (!num2) {
        pass = "failed";
        $(".countingUp .displayResult").append("Enter a Count by number. ");
      }
      if (!num1) {
          pass = "failed";
          $(".countingUp .displayResult").append("Enter a Count to number. ");
      }
      if (num2 < 0) {
          pass = "failed";
          $(".countingUp .displayResult").append("Enter a Count Up number greater than 0");
        }
      if (num1 < num2) {
          pass = "failed";
          $(".countingUp .displayResult").append("Count to number must be larger than the count by number");
      }

    if (pass === "passed") {
      for (var index = 0; index <= num1; index += num2) {
        $(".countingUp .displayResult").append(index+ ", ");
      }
    }
    event.preventDefault();
  });

});
