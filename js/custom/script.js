/**
 * scripts.js
 */
(function($) {
$(document).ready(function(){
  $('.portfolio').masonry({
      columnWidth: 300,
      gutter: 10,
      itemSelector: '.item'
  });
});


function jump(dradis){
  $('html,body').animate({
    scrollTop: $("#"+dradis).offset().top},
    '500', function(){
  });
}

$('#top nav ul li').click(function(){
  var coord= $(this).html();
  jump(coord);
});

}(jQuery));






