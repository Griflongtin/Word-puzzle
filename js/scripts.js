$(function() {
  $("form").submit(function(event){
    var vowels = ["a", "e", "i", "o", "u"];
    event.preventDefault();
      var userInput = $("input#user-sentence").val();

      for ( var number = 0; number <= userInput.length; number += 1) {
        vowels.forEach(function(vowel) {
           userInput = userInput.replace(vowel, "-");
        });
      }
      $("form").hide();
      $("#output").append("<p>" + userInput + "</p>");
  });
});
