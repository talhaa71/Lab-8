function init(){
//add your javascrip between these two lines of code
 
  var button = document.getElementById('entrybutton');
  
  button.addEventListener('click', myFunction);
  
  function myFuntion(){
    var text = document.getElementById('entryinput');
    text.value += ' after clicking';
    alert("Talha Ali: ", text.value);
  }



}

window.addEventListener('load', init);
