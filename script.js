$(document).ready(function(){
  $('#addtobag').on('click',function(){
    
    var button = $(this);
    var bag = $('#bag');
    var bagTotal = bag.attr('data-totalitems');
    var newBagTotal = parseInt(bagTotal) + 1;
    
    button.addClass('sendtobag');
    setTimeout(function(){
      button.removeClass('sendtobag');
      bag.addClass('shake').attr('data-totalitems', newBagTotal);
      setTimeout(function(){
        bag.removeClass('shake');
      },500)
    },1000)
  })
})