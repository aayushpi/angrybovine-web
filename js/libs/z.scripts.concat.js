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

var data = [ {
  "title" : "Vendavo Rebrand",
  "slides" : [
    {
      "image" : "/img/vendavo_01.jpg",
      "caption" : "Vendavo helps companies take profitability to the front lines by delivering simple, actionable and timely guidance that empowers salespeople to close faster, win more and boost margins on every deal. vendavo is the foundation for enterprise profitability."
    }, {
      "image" : "/img/vendavo_02.jpg",
      "caption" : "The Vendavo logo was built on the premise that profitability is the foundation of the enterprise."
    }, {
      "image" : "/img/vendavo_03.jpg",
      "caption" : "The website stands out in a sea of b2b enterprise solutions, we developed a brand that approachable and knowledgable and not afraid to illustrate the complexities of the pricing world."
    }, {
      "image" : "/img/vendavo_04.jpg",
      "caption" : "The homepage of the site serves as an overview to the capabilities they provide, the industries and customers they serve and the value they deliver across the enterprise."
    }, {
      "image" : "/img/vendavo_05.jpg",
      "caption" : "Profitable selling is the mission of vendavo, this page serves as the keystone to the argument that pricing is often overlooked detail in todays selling world, it also serves as proof the value of it."
    }, {
      "image" : "/img/vendavo_06.jpg",
      "caption" : "One of the key calls to action was a free ungated download of a wonderfully rich and informative ebook on the subject of profitable selling."
    }, {
      "image" : "/img/vendavo_07.jpg",
      "caption" : "More often than not people in this field are looking for solutions to key problems relevant to their role. we designed highly specific pages relevant to particular audiences and their pain points."
    }, {
      "image" : "/img/vendavo_08.jpg",
      "caption" : "The solution pages ended on simplified easy to act upon page. once the knowledge had been gained there was only one thing left to do, get a demo. now."
    }, {
      "image" : "/img/vendavo_09.jpg",
      "caption" : "Industry knowledge is a key difference at vendavo, we provided a framework for industry and vendavo expertise to be showcased."
    }, {
      "image" : "/img/vendavo_10.jpg",
      "caption" : "At the product page level view, we put benefits and features on display."
    }, {
      "image" : "/img/vendavo_11.jpg",
      "caption" : "As part of the rebrand, angrybovine touched every piece of existing collateral, modernized it and brought it into the new brand feel."
    }, {
      "image" : "/img/vendavo_12.jpg",
      "caption" : "The rebrand, also led us to completely redesign the product, customer and thought leadership content for vendavo, with an engaging and consistent look with the new brand."
  } ],
  "feature" : "/img/vendavo_feature.png"
},
{
  "title" : "Vendavo Rebrand",
  "slides" : [
    {
      "image" : "/img/vendavo_01.jpg",
      "caption" : "Vendavo helps companies take profitability to the front lines by delivering simple, actionable and timely guidance that empowers salespeople to close faster, win more and boost margins on every deal. vendavo is the foundation for enterprise profitability."
    }, {
      "image" : "/img/vendavo_02.jpg",
      "caption" : "The Vendavo logo was built on the premise that profitability is the foundation of the enterprise."
    }, {
      "image" : "/img/vendavo_03.jpg",
      "caption" : "The website stands out in a sea of b2b enterprise solutions, we developed a brand that approachable and knowledgable and not afraid to illustrate the complexities of the pricing world."
    }, {
      "image" : "/img/vendavo_04.jpg",
      "caption" : "The homepage of the site serves as an overview to the capabilities they provide, the industries and customers they serve and the value they deliver across the enterprise."
    }, {
      "image" : "/img/vendavo_05.jpg",
      "caption" : "Profitable selling is the mission of vendavo, this page serves as the keystone to the argument that pricing is often overlooked detail in todays selling world, it also serves as proof the value of it."
    }, {
      "image" : "/img/vendavo_06.jpg",
      "caption" : "One of the key calls to action was a free ungated download of a wonderfully rich and informative ebook on the subject of profitable selling."
    }, {
      "image" : "/img/vendavo_07.jpg",
      "caption" : "More often than not people in this field are looking for solutions to key problems relevant to their role. we designed highly specific pages relevant to particular audiences and their pain points."
    }, {
      "image" : "/img/vendavo_08.jpg",
      "caption" : "The solution pages ended on simplified easy to act upon page. once the knowledge had been gained there was only one thing left to do, get a demo. now."
    }, {
      "image" : "/img/vendavo_09.jpg",
      "caption" : "Industry knowledge is a key difference at vendavo, we provided a framework for industry and vendavo expertise to be showcased."
    }, {
      "image" : "/img/vendavo_10.jpg",
      "caption" : "At the product page level view, we put benefits and features on display."
    }, {
      "image" : "/img/vendavo_11.jpg",
      "caption" : "As part of the rebrand, angrybovine touched every piece of existing collateral, modernized it and brought it into the new brand feel."
    }, {
      "image" : "/img/vendavo_12.jpg",
      "caption" : "The rebrand, also led us to completely redesign the product, customer and thought leadership content for vendavo, with an engaging and consistent look with the new brand."
  } ],
  "feature" : "/img/vendavo_feature.png"
},
{
  "title" : "Vendavo Rebrand",
  "slides" : [
    {
      "image" : "/img/vendavo_01.jpg",
      "caption" : "Vendavo helps companies take profitability to the front lines by delivering simple, actionable and timely guidance that empowers salespeople to close faster, win more and boost margins on every deal. vendavo is the foundation for enterprise profitability."
    }, {
      "image" : "/img/vendavo_02.jpg",
      "caption" : "The Vendavo logo was built on the premise that profitability is the foundation of the enterprise."
    }, {
      "image" : "/img/vendavo_03.jpg",
      "caption" : "The website stands out in a sea of b2b enterprise solutions, we developed a brand that approachable and knowledgable and not afraid to illustrate the complexities of the pricing world."
    }, {
      "image" : "/img/vendavo_04.jpg",
      "caption" : "The homepage of the site serves as an overview to the capabilities they provide, the industries and customers they serve and the value they deliver across the enterprise."
    }, {
      "image" : "/img/vendavo_05.jpg",
      "caption" : "Profitable selling is the mission of vendavo, this page serves as the keystone to the argument that pricing is often overlooked detail in todays selling world, it also serves as proof the value of it."
    }, {
      "image" : "/img/vendavo_06.jpg",
      "caption" : "One of the key calls to action was a free ungated download of a wonderfully rich and informative ebook on the subject of profitable selling."
    }, {
      "image" : "/img/vendavo_07.jpg",
      "caption" : "More often than not people in this field are looking for solutions to key problems relevant to their role. we designed highly specific pages relevant to particular audiences and their pain points."
    }, {
      "image" : "/img/vendavo_08.jpg",
      "caption" : "The solution pages ended on simplified easy to act upon page. once the knowledge had been gained there was only one thing left to do, get a demo. now."
    }, {
      "image" : "/img/vendavo_09.jpg",
      "caption" : "Industry knowledge is a key difference at vendavo, we provided a framework for industry and vendavo expertise to be showcased."
    }, {
      "image" : "/img/vendavo_10.jpg",
      "caption" : "At the product page level view, we put benefits and features on display."
    }, {
      "image" : "/img/vendavo_11.jpg",
      "caption" : "As part of the rebrand, angrybovine touched every piece of existing collateral, modernized it and brought it into the new brand feel."
    }, {
      "image" : "/img/vendavo_12.jpg",
      "caption" : "The rebrand, also led us to completely redesign the product, customer and thought leadership content for vendavo, with an engaging and consistent look with the new brand."
  } ],
  "feature" : "/img/vendavo_feature.png"
},
{
  "title" : "Vendavo Rebrand",
  "slides" : [
    {
      "image" : "/img/vendavo_01.jpg",
      "caption" : "Vendavo helps companies take profitability to the front lines by delivering simple, actionable and timely guidance that empowers salespeople to close faster, win more and boost margins on every deal. vendavo is the foundation for enterprise profitability."
    }, {
      "image" : "/img/vendavo_02.jpg",
      "caption" : "The Vendavo logo was built on the premise that profitability is the foundation of the enterprise."
    }, {
      "image" : "/img/vendavo_03.jpg",
      "caption" : "The website stands out in a sea of b2b enterprise solutions, we developed a brand that approachable and knowledgable and not afraid to illustrate the complexities of the pricing world."
    }, {
      "image" : "/img/vendavo_04.jpg",
      "caption" : "The homepage of the site serves as an overview to the capabilities they provide, the industries and customers they serve and the value they deliver across the enterprise."
    }, {
      "image" : "/img/vendavo_05.jpg",
      "caption" : "Profitable selling is the mission of vendavo, this page serves as the keystone to the argument that pricing is often overlooked detail in todays selling world, it also serves as proof the value of it."
    }, {
      "image" : "/img/vendavo_06.jpg",
      "caption" : "One of the key calls to action was a free ungated download of a wonderfully rich and informative ebook on the subject of profitable selling."
    }, {
      "image" : "/img/vendavo_07.jpg",
      "caption" : "More often than not people in this field are looking for solutions to key problems relevant to their role. we designed highly specific pages relevant to particular audiences and their pain points."
    }, {
      "image" : "/img/vendavo_08.jpg",
      "caption" : "The solution pages ended on simplified easy to act upon page. once the knowledge had been gained there was only one thing left to do, get a demo. now."
    }, {
      "image" : "/img/vendavo_09.jpg",
      "caption" : "Industry knowledge is a key difference at vendavo, we provided a framework for industry and vendavo expertise to be showcased."
    }, {
      "image" : "/img/vendavo_10.jpg",
      "caption" : "At the product page level view, we put benefits and features on display."
    }, {
      "image" : "/img/vendavo_11.jpg",
      "caption" : "As part of the rebrand, angrybovine touched every piece of existing collateral, modernized it and brought it into the new brand feel."
    }, {
      "image" : "/img/vendavo_12.jpg",
      "caption" : "The rebrand, also led us to completely redesign the product, customer and thought leadership content for vendavo, with an engaging and consistent look with the new brand."
  } ],
  "feature" : "/img/vendavo_feature.png"
}];



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

  $('.close').click(function(){
    $('#detail').fadeOut(1000);
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
    $('#gallery img').attr('src', data[0].slides[z-1].image);
    $('#info h2').html(data[0].slides[z-1].caption);
  });

   $('.item img').click(function(){
    var x = $(this).offset();
    // var y = $(this).css('height');
    $('#detail').fadeOut('fast', function(){
      $('#detail').css({'top': x.top});
      $('#gallery img').attr('src', data[0].slides[0].image);
      $('#info h2').html(data[0].slides[0].caption);
      $('#detail').fadeIn(1000);
    });
  });

  $('.burger').click(function(){
    $('#top').animate({height:'140px'});
    $('#top div nav ul').animate({top:'-60px'});
  });

}(jQuery));






