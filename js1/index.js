AOS.init({
  duration: 1200
});

//Menu Close on clicking Link When Collapsed (Mobile Screen)
$(document).on('click','.navbar-collapse.in',function(e) {
  if( $(e.target).is('a') ) {
      $(this).collapse('hide');
  }
});