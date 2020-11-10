
  //display dynamic date
let currentDay = null, date = null;

let update = function () {
date = moment(new Date())
currentDay.html(date.format('LLLL'));
};

$(document).ready(function(){
currentDay = $('#currentDay')
update();
setInterval(update, 1000);
});

// define lets
let userTask = $('#userTask');
let saveBtn = $('saveBtn');

