
$(function(){
  $('div.div').hide().first().show();
  $('li').click(function() {
    event.preventDefault();
    $(this).toggleClass('active');
    $(this).siblings('li').removeClass('active');



    var divID = $(this).children().attr('href');
    $('div.div').hide();
    $(divID).show();


  });



});
