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

  $('.item img').click(function(){
    var x = $(this).offset();
    // var y = $(this).css('height');
    $('#detail').fadeOut('fast', function(){
      $('#detail').css({'top': x.top});
      $('#detail').fadeIn(1000);
    });
  });
  $('#info span a').click(function(){
    var x = $(this).data('val');
    var y = $('#gallery img').data('count');
    if (y === 12 && x === 1){
      y = 1;
    } else if(y === 1 && x === -1){
      y = 12;
    }
    var z = x+y;
    $('#gallery img').data('count', z);
    var images=['/img/vendavo_01.jpg','/img/vendavo_02.jpg','/img/vendavo_03.jpg','/img/vendavo_04.jpg','/img/vendavo_05.jpg','/img/vendavo_06.jpg','/img/vendavo_07.jpg','/img/vendavo_08.jpg','/img/vendavo_09.jpg','/img/vendavo_10.jpg','/img/vendavo_11.jpg','/img/vendavo_12.jpg'];
    $('#gallery img').attr('src', images[z]);
  });

  $('.burger').click(function(){
    $('#top').animate({height:'140px'});
    $('#top div nav ul').animate({top:'-60px'});
  });

}(jQuery));






