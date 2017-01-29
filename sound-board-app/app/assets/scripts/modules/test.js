var key = document.querySelectorAll(".key");

for(var i = 0; i < key.length; i++){

    key[i].addEventListener('mousedown', down);

    key[i].addEventListener('mouseup',up);


}

document.addEventListener('keydown',function(){
console.log(String.fromCharCode(event.keyCode).toLowerCase());
var key_pressed = String.fromCharCode(event.keyCode).toLowerCase();
document.querySelector(`#${key_pressed}`).className +=" key--large";

var sound = new Audio(`${document.querySelector(`#${key_pressed}`).dataset.sound}`)
console.log(sound);
sound.play();
});

document.addEventListener('keyup',function(){
  var key_pressed = String.fromCharCode(event.keyCode).toLowerCase();
    document.querySelector(`#${key_pressed}`).className ='key';
  });


// functions
function down(){
  this.className += ' key--large';
  var sound = new Audio(this.dataset.sound)
  sound.play();
}
function up(){
  this.className = 'key';
}
