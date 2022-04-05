$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const nameInput = $("input#name").val();
    const dobInput = $("#born").val();
    const musicInput = $("input:radio[name=music]:checked").val();
    
    $(".name").text(nameInput);
    $("#dob").text(dobInput);
    $("#music").text(musicInput);

    $("#story").show();
  });
});

