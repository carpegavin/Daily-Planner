   # The Number 1 Daily-Planner

## https://carpegavin.github.io/Daily-Planner/

## The goal of this project was to do the following:
- Create a calendar application that allows a user to input hourly events creating a daily planner so that their time may be managed effectively.

## The requirements to complete this project were as follows:
- display current date at the top of the calendar
- when user scrolls down, they are presented with standard business hours timeblocks
- the timeblocks are color coded to indicate whether the event is past, present, or future
- timeblocks are accepting of inputs
- the save button saves timeblock data to local storage
- saved events must persist after page refresh

## To meet the above criteria, I implemented the following:
- created this repo with a readme.md
- set the HTML framework with rows for each hour with a save button
- Javascript/Jquery
   - added a moment() for the current time
   - set consts
   - set an array of hour objects with a key and value
   - set a for-loop to retrieve user input from local storage
   - built the logic for each hour using if else statements to reset the row color based upon the current hour
   - set a function to store user input into local storage onclick
   - set a function to clear user input from the row fields onclick

![The #1 Workday Scheduler](https://github.com/carpegavin/The-Number-1-Work-Day-Scheduler/blob/main/assets/img/Screenshot%202020-11-13%20201048.jpg?raw=true)

© copyright 2020 Gavin H Phill
