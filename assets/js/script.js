var dateDisplayEl = $('#currentDay');

function displayDate() {
    var rightNow = moment().format("MMM Do YYYY"); 
    dateDisplayEl.text(rightNow);
  }
  
displayDate()

// $('[placeholder]').focus(function() {
//     var input = $(this);
//     if (input.val() == input.attr('placeholder')) {
//       input.val('');
//       input.removeClass('placeholder');
//     }
//   }).blur(function() {
//     var input = $(this);
//     if (input.val() == '' || input.val() == input.attr('placeholder')) {
//       input.addClass('placeholder');
//       input.val(input.attr('placeholder'));
//     }
//   }).blur();