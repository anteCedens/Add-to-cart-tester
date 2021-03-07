$(document).ready(function(){
  $('#addtobag').on('click',function(){
    
    var button = $(this);
    var bag = $('#bag');
    
    
    
    button.addClass('sendtobag');
    setTimeout(function(){
      button.removeClass('sendtobag');
      bag.addClass('shake');
      setTimeout(function(){
        bag.removeClass('shake');
      },500)
    },1000)
  })
})