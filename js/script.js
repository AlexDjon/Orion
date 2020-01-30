$(document).ready(function() {
   $('.historias .grid b').on('click', function() {
      const status = $('#p2').css('display')
      if(status == 'none') {
         $('#p2').slideToggle(400)
         $('.historias .grid b').html('..menos')
      } else {
         $('#p2').slideToggle(400)    
         $('.historias .grid b').html('..mais')
      }
   })
   $(window).scroll(function(e) {
      const windowScroll = $(window).scrollTop()
      if(windowScroll >= 580) {
         $('.gotop').fadeIn(600)
      }
      else {
         $('.gotop').fadeOut(600)
      }
   })
   $('.gotop').on('click', function() {
      $(window).scrollTop(0)
   })
})