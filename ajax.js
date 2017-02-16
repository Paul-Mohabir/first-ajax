$(document).ready(function () {
  /* Your code goes here */
  //this is the start of my eventhandler the #ajax_request is the id of the element .on is a method simillar to when
  //('click', function) is the arguements like the stuff you want to happen
$('#ajax_request').on('click', function() {
  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/',
    method: 'GET',
    // data: 'html',
    dataType: 'text'
  });
//close ajax_request
});

$('#ajax_ping-pong').on('click', function() {
  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/pong',
    method: 'GET',
    // data: 'html',
    dataType: 'text'
  }).fail(function(data) {
    console.log("didn't work");
  });
});
//the closing brackets below is for the ,document
});
