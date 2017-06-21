
$(function(){
  $('div.div').hide().first().show();
  $('input').next('em').hide();
  $('li').click(function() {
    event.preventDefault();
    $(this).toggleClass('active');
    $(this).siblings('li').removeClass('active');



    var divID = $(this).children().attr('href');
    $('div.div').hide();
    $(divID).show();


  });


  $('input').hover(function(){
    $(this).next('em').animate({opacity: "show", left: "150"},"show");
  }, function(){
    $(this).next("em").animate({opacity: "hide", left: "150"}, "fast");
  })





});
