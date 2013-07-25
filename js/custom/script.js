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
// Fix this
   var dfd = $.Deferred();
   dfd.done($('.portfolio').masonry({
        columnWidth: 300,
        gutter: 10,
        itemSelector: '.item'
    }), jump("work"));
  });



  $('#top nav ul li').click(function(){
    var coord= $(this).html();
    jump(coord);
  });

}(jQuery));






