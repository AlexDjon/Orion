$(document).ready(function() {
   $('.historias .grid b').on('click', function() {
      const status = $('#p2').css('display')
      if(status == 'none') {
         $('#p2').css('display', 'flex')
         $('.historias .grid b').html('..menos')
      } else {
         $('#p2').css('display', 'none')         
         $('.historias .grid b').html('..mais')
      }
   })
})