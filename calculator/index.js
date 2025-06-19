const display = document.getElementById("display");
function appendToDisplay(btn){
  display.value += btn;
}
function clearDisplay(){
  display.value = "";
}
function calculate(){
  try{
    display.value = eval(display.value);
  }
  catch(error){
    display.value = "Error";
  }

}
