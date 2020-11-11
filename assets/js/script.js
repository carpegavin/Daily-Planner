
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

//-------------------------------------------------------------------

let saveBtn = $('saveBtn');

//-------------------------------------------------------------------

function myFunc(){
    let hour9 = $('#userTask9').get(0);
    hour9 = 9;
}


// let hour9 = 9
// $('#userTask9').get(0);
console.log (hour9);

let hour10 = 10
$('#userTask10').get(0);

let hour11 = 11
$('#userTask11').get(0);

let hour12 = 12
$('#userTask12').get(0);

let hour1 = 1
$('#userTask1').get(0);

let hour2 = 2
$('#userTask2').get(0);

let hour3 = 3
$('#userTask3').get(0);

let hour4 = 4
$('#userTask4').get(0);

let hour5 = 5
$('#userTask5').get(0);
    
//----------------------------------------------------------------------
//LOGIC 

// if userTask9 < current hour do the following
$('.present').css({"background-color":"#d3d3d3"});
//else userTask9 > current time do the following
$('.present').css({"background-color":"#77dd77"});

//if userTask10 < current hour do the following
$('.present').css({"background-color":"#d3d3d3"});
//else userTask10 > current time do the following
$('.present').css({"background-color":"#77dd77"});

//if userTask11 < current hour do the following
$('.present').css({"background-color":"#d3d3d3"});
//else userTask11 > current time do the following
$('.present').css({"background-color":"#77dd77"});

//if userTask12 < current hour do the following
$('.present').css({"background-color":"#d3d3d3"});
//else userTask12 > current time do the following
$('.present').css({"background-color":"#77dd77"});

//if userTask1 < current hour do the following
$('.present').css({"background-color":"#d3d3d3"});
//else userTask1 > current time do the following
$('.present').css({"background-color":"#77dd77"});

//if userTask2 < current hour do the following
$('.present').css({"background-color":"#d3d3d3"});
//else userTask2 > current time do the following
$('.present').css({"background-color":"#77dd77"});

//if userTask3 < current hour do the following
$('.present').css({"background-color":"#d3d3d3"});
//else userTask3 > current time do the following
$('.present').css({"background-color":"#77dd77"});

//if userTask4 < current hour do the following
$('.present').css({"background-color":"#d3d3d3"});
//else userTask4 > current time do the following
$('.present').css({"background-color":"#77dd77"});

//if userTask5 < current hour do the following
$('.present').css({"background-color":"#d3d3d3"});
//else userTask5 > current time do the following
$('.present').css({"background-color":"#77dd77"});





//store user data

// localStorage.setItem('userTask', JSON.stringify(string));


// $('.present').css('color', '');


// var currentTime = new Date().getHours();
// if (document.body) {
//     if (7 <= currentTime && currentTime < 20) {
//         document.body.className = "past";
//     }
//     else {
//         document.body.background = ;
//     }
// }


//store user input into local storage using Json