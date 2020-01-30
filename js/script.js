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
})