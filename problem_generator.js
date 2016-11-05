function validate(correct_answer) {
   var answer = document.getElementById("answer").value;

   console.log("Answer: " + correct_answer);

   if(document.getElementById("problem").classList.contains("has-error"))
    {
        document.getElementById("problem").classList.remove("has-error");
        document.getElementById("wrong_answer").classList.remove("shown-message");
        document.getElementById("wrong_answer").classList.add("hidden-message");
    }
    else if(document.getElementById("problem").classList.contains("has-success"))
    {
        document.getElementById("problem").classList.remove("has-success");
        document.getElementById("next")/classList.remove("shown-message");
        document.getElementById("next").classList.add("hidden-message");

    }

   if(answer == correct_answer) {
      document.getElementById("problem").classList.add("has-success");
      document.getElementById("next").classList.remove("hidden-message");
      document.getElementById("next").classList.add("shown-message");
   }
   else {
      document.getElementById("wrong_answer").innerHTML="That is completely wrong";
      document.getElementById("wrong_answer").classList.remove("hidden-message");
      document.getElementById("wrong_answer").classList.add("shown-message");
      document.getElementById("problem").classList.add("has-error");
   }
}
