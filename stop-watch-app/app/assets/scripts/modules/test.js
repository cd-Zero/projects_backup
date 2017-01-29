// global variable
var time = 0.0;
var run = null;
console.log(!null == true);

// **** DOM ELEMENTS ****
// start button
var start_button = document.querySelector('#start');
// reset button
var reset_button = document.querySelector('#reset');
// record button
var record_button = document.querySelector('#record');
// time_log_element
var time_log = document.querySelector('#time_log');



start_button.addEventListener('click', timer);
reset_button.addEventListener('click', reset);


// functions

// timer func
function timer(){
  // record_current_time function
  record_button.addEventListener('click', recordTime);
  if(!run){
    run = setInterval(function(){
      myTimer()
    }, 10);
  }
  else {
    clearInterval(run);
    run = null;
  }
}

function myTimer(){
  time += 0.01;
  time_log.innerHTML = time.toFixed(2);
}

// reset func
function reset(){
    location.reload();
}




// record_timer_function
function recordTime(){
  // JS create element
  var list = document.createElement("LI");
  var recorded_time = document.querySelector("#recorded_time");
  var listText = document.createTextNode(time.toFixed(2));

  list.appendChild(listText);
  recorded_time.appendChild(list);
}
