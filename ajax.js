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

$('#ajax_pong').on('click', function() {
  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/pong',
    method: 'GET',
    // data: 'html',
    dataType: 'text'
  }).always(function(data) {
    console.log("the request is over  ");
  });
});

$('#ajax_ping').on('click', function() {
  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/ping',
    method: 'GET',
    // data: 'html',
    dataType: 'text'
  }).done(function(data) {
    console.log(data);
  });
});

$('#count').on('click', function() {
  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/count',
    method: 'GET',
    // data: 'html',
    dataType: 'text'
  }).done(function(data) {
    console.log(data);
  })
})

$('#time').on('click', function() {
  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/time',
    method: 'get',
    data: 'Europe/Sofia',
    dataType: 'text'
  }).done(function(time) {
    console.log(time);
  })
})

$('#a_car').on('click', function(){
  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/a_car',
    method: 'GET',
    //data:
    dataType: 'html'
  }).done(function(data){
    $('#car').append(data);
  });
});
//the closing brackets below is for the ,document
});
