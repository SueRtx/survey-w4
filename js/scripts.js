$(document).ready(function(){
  $("#formone").submit(function(event){
    event.preventDefault();
    const nameInput = $("input#name").val();

    const dobInput = $("#born").val();
    const musicInput = $("input:radio[name=music]:checked").val();

    $("#music").text(musicInput);
    $("#name").text(nameInput);
    $("#dob").text(dobInput);

    $("#story").show();
  });
});
