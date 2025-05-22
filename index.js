let allSelect = document.querySelectorAll("select");
let timeEl = document.querySelector("h2")
let setBtn = document.querySelector("button")
let contentbox = document.querySelector(".content-box")
let alarmTime;
let Ringtone = new Audio("alarm-clock-23772.mp3")

//run loop for hours
for(let i = 12;i > 0;i--)
{
    i = i < 10 ? "0"+i : i
    let option = `<option value="${i}">${i}</option>`
    allSelect[0].innerHTML += option;
}

//run loop for menute
for(let i = 59;i > 0;i--)
{
    i = i < 10 ? "0"+i : i
    let option = `<option value="${i}">${i}</option>`
    allSelect[1].innerHTML += option;
}

//run loop for ampm
for(let i = 2;i > 0;i--)
{
   ampm = i == 1 ? "AM" : "PM"
    let option = `<option value="${ampm}">${ampm}</option>`
    allSelect[2].innerHTML += option;
}
//geting hour minute second
setInterval(()=>{
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let ampm = "AM";
    if(h >= 12)
    {
        ampm = "PM"
    }
    // if hours value is 0 , set this value into 12
    h = h == 0 ? h = 12 : h
    // adding 0 before hour minute and second
    h = h < 10 ? "0"+h : h
    m = m < 10 ? "0"+m : m
    s = s < 10 ? "0"+s : s
    timeEl.innerHTML = `${h}:${m}:${s} ${ampm}`;
    if(alarmTime == `${h}:${m} ${ampm}`)
    {
        Ringtone.play();
        Ringtone.loop = true;
    }
},1000)

// set alarm coding
const setAlarm = () => {
    let time = `${allSelect[0].value}:${allSelect[1].value} ${allSelect[2].value}`;
   if(time.includes(Hour) || time.includes("Minute") || time.includes("AMPM"))
   {
    return swal("Warning","Please select a valid time",'warning');
   }
   contentbox.classList.add("disabled");
   setBtn.innerText = "Clear Alarm"
   alarmTime = time;
}
setBtn.onclick = () =>{
    setAlarm()
}