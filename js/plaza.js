$(document).ready(function() {
  $('#textarea_value').click(function() {
  var textarea_value = $("#textarea").val();
  if(textarea_value=='') {
  alert("Enter Some Text In Textarea");
  }else{
  alert(textarea_value);
  }
  });
  $('#textarea_reset').click(function() {
  $("textarea").val('');
  });
  });
