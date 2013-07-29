/**
 * scripts.js
 */
(function($) {
  function jump(dradis){
    $('html,body').animate({
      scrollTop: $(dradis).offset().top},
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
    }), jump("#work"));
  });

  $('#top div h1').click(function(){ $('html,body').animate({
      scrollTop: $("#work").offset().top},
      '500', function(){
    });
  });

  $('#top nav ul li').click(function(){
    var coord = "#" + $(this).html();
    if (coord === "work"){
      coord = ".portfolio";
    }
    jump(coord);
  });

  $('.burger').click(function(){
    $('#top').animate({height:'140px'});
    $('#top div nav ul').animate({top:'-60px'});
  });

}(jQuery));






