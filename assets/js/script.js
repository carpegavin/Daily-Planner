
  //display dynamic date
let currentDay = null, date = null;

let update = function () {
date = moment(new Date())
currentDay.html(date.format('YYYY-MM-DD HH:mm'));
};

$(document).ready(function(){
currentDay = $('#currentDay')
update();
setInterval(update, 1000);
});

//-----------SET VARIABLES---------------------------------------------------

let saveBtn = $('saveBtn');
let clearBtn = $('reset');
let userInput = $('present')

//-------------------------------------------------------------------


let hour9 = { 
    "row": $('#userTask9').get(0),
    "value": 9};

    console.log(hour9);

let hour10 = {
    row: $('#userTask10').get(0), 
    value: 10};

let hour11 = {
    row: $('#userTask11').get(0), 
    value: 11};

let hour12 = {
    row: $('#userTask12').get(0),
    value: 12};

let hour13 = {
    row: $('#userTask1').get(0),
    value: 1};

let hour14 = {
    row: $('#userTask2').get(0),
    value: 2};

let hour15 = {
    row: $('#userTask3').get(0),
    value: 3};

let hour16 = {
    row: $('#userTask4').get(0),
    value: 4};

let hour17 = {
    row: $('#userTask5').get(0),
    value: 5};

    
 
//----------------------------------------------------------------------
//LOGIC 


if (hour9.value === moment().hour())
    {$('#userTask9').css({"background-color":"#ff6961"})}

else if (hour9.value < moment().hour()) 
    {$('#userTask9').css({"background-color":"#d3d3d3"})}

else if (hour9.value > moment().hour())
    {$('#userTask9').css({"background-color":"#77dd77"})}


// if (hour10.value < moment().hour())
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

// if (hour13 < moment().hour())
//     $('.present').css({"background-color":"#d3d3d3"});
// else (hour13 > moment().hour())
//     $('.present').css({"background-color":"#77dd77"});

// if (hour14 < moment().hour())
//     $('.present').css({"background-color":"#d3d3d3"});
// else (hour16 > moment().hour())
//     $('.present').css({"background-color":"#77dd77"});

// if (hour15 < moment().hour())
//     $('.present').css({"background-color":"#d3d3d3"});
// else (hour16 > moment().hour())
//     $('.present').css({"background-color":"#77dd77"});

// if (hour16 < moment().hour())
//     $('.present').css({"background-color":"#d3d3d3"});
// else (hour16 > moment().hour())
//     $('.present').css({"background-color":"#77dd77"});

// if (hour17 < moment().hour())
//     $('.present').css({"background-color":"#d3d3d3"});
// else (hour17 > moment().hour())
//     $('.present').css({"background-color":"#77dd77"});




//------------STORE USER INPUT---------------------------------------

// localStorage.setItem('userTask9', JSON.stringify(string));
// var s = JSON.stringify(obj)
// var o = JSON.parse(s)



// submitform(userInput);
// {
//     localStorage.setItem( '.present', JSON.stringify() );
// }
// formData = JSON.stringify($("#userTask9").serializeArray());


// $('.saveBtn').on('click', function(){
//     let post_vars = $('#userTask1').serializeArray();
//     localStorage.setItem(id_vars);
// })

