function init(){
//add your javascrip between these two lines of code
 
  var button = document.getElementById('entrybutton');
  
  
  function myFuntion(){
    var textbox = document.getElementById('entryinput');
    document.getElementById('textoutput').innerHTML = textbox.value;
    alert("Talha Ali: " + textbox.value);
  }

  button.addEventListener('click', myFunction);

  }

window.addEventListener('load', init);
