$(document).ready(function() {
   $('.historias .grid b').on('click', function() {
      const status = $('#p2').css('display') == 'none' ? 'flex' : 'none'
      $('#p2').css('display', status)
   })
})