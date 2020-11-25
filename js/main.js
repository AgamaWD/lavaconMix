$(document).ready(function(){
  if ( $(window).width() >= 751 ) {
    $('#submenu').hover(function () {
      $('#submenu-content, .plus').toggleClass('active');
    });
  } else {

    $('#dropdown-btn').click(function () {
      $('#navigation, #dropdown-btn').toggleClass('active');
    });
    
    $('#submenu-btn').click(function (e){	
      $('#submenu-content, .plus').toggleClass('active');
      e.stopPropagation();
    });

    $(document).click( function(e){
      if ( $(e.target).closest('#submenu-content').length ) {
          return;
      }
      $('#submenu-content, .plus').removeClass('active');
  });
}});