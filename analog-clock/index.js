const hour = document.getElementById("hour");
const mins = document.getElementById("minute");
const sec = document.getElementById("second");
function time(){
  let date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let s = date.getSeconds();

  hour.style.transform = `rotate(${30*hr+min/2}deg)`;
  mins.style.transform = `rotate(${6*min}deg)`;
  sec.style.transform = `rotate(${6*s}deg)`;
}
setInterval(time,1000);

function update(){
  const now = new Date();
  let hours = now.getHours();
  const meridian = hours>=12 ? "PM": "AM";
  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2,0);
  const minutes = now.getMinutes().toString().padStart(2,0);
  const seconds = now.getSeconds().toString().padStart(2,0);
  const timestr = `${hours} : ${minutes} : ${seconds} ${meridian}`;
  document.getElementById("time").textContent = timestr;
    


  var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var months = ["January", "February", "March","April", "May", "June", "July", "August", "Septeber", "November", "December"]
document.getElementById("day").innerHTML = (week[now.getDay()] + " " + months[now.getMonth()] + " " + now.getDate() + " " + now.getFullYear());
}
update();
setInterval(update,1000);

