
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
let clearBtn = $('reset');

//-------------------------------------------------------------------

let hour9 = {
    row: $('#userTask9').get(0), 
    value: 9};

let hour10 = {
    row: $('#userTask10').get(0), 
    value: 10};

let hour11 = {
    row: $('#userTask11').get(0), 
    value: 11};

let hour12 = {
    row: $('#userTask12').get(0),
    value: 12};

let hour1 = {
    row: $('#userTask1').get(0),
    value: 1};

let hour2 = {
    row: $('#userTask2').get(0),
    value: 2};

let hour3 = {
    row: $('#userTask3').get(0),
    value: 3};

let hour4 = {
    row: $('#userTask4').get(0),
    value: 4};

let hour5 = {
    row: $('#userTask5').get(0),
    value: 5};


    
//----------------------------------------------------------------------
//LOGIC 




if (hour9 < moment().hour()) 
    {$('.present').css({"background-color":"#d3d3d3"})}
else 
    (hour9 > moment().hour()) 
    {$('.present').css({"background-color":"#77dd77"})}


console.log(hour9);


// if (hour10 < moment().hour())
//     $('.present').css({"background-color":"#d3d3d3"});
// else (hour10 > moment().hour())
//     $('.present').css({"background-color":"#77dd77"});

// if (hour11 < moment().hour())
//     $('.present').css({"background-color":"#d3d3d3"});
// else (hour11 > moment().hour())
//     $('.present').css({"background-color":"#77dd77"});

// if (hour12 < moment().hour())
//     $('.present').css({"background-color":"#d3d3d3"});
// else (hour12 > moment().hour())
//     $('.present').css({"background-color":"#77dd77"});

// if (hour1 < moment().hour())
//     $('.present').css({"background-color":"#d3d3d3"});
// else (hour1 > moment().hour())
//     $('.present').css({"background-color":"#77dd77"});

// if (hour2 < moment().hour())
//     $('.present').css({"background-color":"#d3d3d3"});
// else (hour2 > moment().hour())
//     $('.present').css({"background-color":"#77dd77"});

// if (hour3 < moment().hour())
//     $('.present').css({"background-color":"#d3d3d3"});
// else (hour3 > moment().hour())
//     $('.present').css({"background-color":"#77dd77"});

// if (hour4 < moment().hour())
//     $('.present').css({"background-color":"#d3d3d3"});
// else (hour4 > moment().hour())
//     $('.present').css({"background-color":"#77dd77"});

// if (hour5 < moment().hour())
//     $('.present').css({"background-color":"#d3d3d3"});
// else (hour5 > moment().hour())
//     $('.present').css({"background-color":"#77dd77"});




//store user data

// localStorage.setItem('userTask', JSON.stringify(string));
