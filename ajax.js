$(document).ready(function () {
  /* Your code goes here */
$('#ajax_request').on('click', function() {
  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/',
    method: 'GET',
    // data: 'html',
    dataType: 'text'
  });
//close ajax_request
});
//the closing brackets below is for the ,document
});
