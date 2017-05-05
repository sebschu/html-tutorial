

function validate() {

  // hide all error messages
  $(".error").hide();

  //check whether the user entered a name
  if ($("#name-input").val() == "") {
    $("#name-error").show();
    return false;
  }

  // check whether the user selected an age
  if ($(".age-input:checked").length != 1) {
    $("#age-error").show();
    return false;
  }
  return true;
}

function clearForm() {
    $("input[type=text]").val("");
    $("textarea").val("");
    $("input[type=radio]").attr("checked", null);
    $("input[type=checkbox]").attr("checked", null);
    $("select").val("");
}

function submitForm() {

  //hide previous response (if it exists)
  $("#response").hide();

  //check whether a user entered a name and an age
  if ( ! validate()) {
    return false;
  }

  //set the name in the response to the value of the text field
  //you can also use .html() instead of .text()
  $("#response-name").text($("#name-input").val());

  //set I think it is great that ... with contents of
  //the text box or use the age.
  if ($("#story-input").val() != "") {
    //replace I with you
    var story = $("#story-input").val().replace("I", "you");
    $("#response-story").text(story);
  } else {
    var story = "you are " + $(".age-input:checked").val() + " years old";
    $("#response-story").text(story);
  }


  if ($(".favorite-colors-input:checked").length > 0) {
    favorite_cols = []
    $(".favorite-colors-input:checked").each(function() {
      favorite_cols.push($(this).val());
    });

    $("#favorite-colors-response").text(favorite_cols.join(" and "));
    $("#favorite-colors-sentence").show();
  } else {
    $("#favorite-colors-sentence").hide();
  }


  $("#response-occupation").text($("#occupation-input").val());
  $("#response").show();

  clearForm();

}


$(document).ready(function() {

  $(".error").hide();
  $("#response").hide();
});
