/**
 * scripts.js
 */
(function($) {
  
  function jump(dradis){
    $('html,body').animate({
      scrollTop: $("#"+dradis).offset().top},
      '500', function(){
    });
  }

  $(document).ready(function(){
    jump("work");
    $('.portfolio').masonry({
        columnWidth: 300,
        gutter: 10,
        itemSelector: '.item'
    });
  });



  $('#top nav ul li').click(function(){
    var coord= $(this).html();
    jump(coord);
  });

}(jQuery));






