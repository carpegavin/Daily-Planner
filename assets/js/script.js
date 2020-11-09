var dateDisplayEl = $('#currentDay');

function displayDate() {
    var rightNow = moment().format("MMM Do YY"); 
    dateDisplayEl.text(rightNow);
  }
  