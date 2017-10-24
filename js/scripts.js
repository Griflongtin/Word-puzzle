$(function() {
  $("form").submit(function(event){
    event.preventDefault();
    var vowels = ["a", "e", "i", "o", "u"];
    var letters = $("input#user-sentence").val().split("");
    for (var iletter = 0; iletter < letters.length; iletter++) {
      for (var ivowel = 0; ivowel < vowels.length; ivowel++) {
        if (letters[iletter] === vowels[ivowel]){
        letters[iletter] = "-";
        };
      };
    };
    $("#output").append(letters.join(""));
  });
});
