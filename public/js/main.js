const days=document.querySelector('.day');
     const times =document.querySelector('.time');
     const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
       
        const d = new Date();
        let day = weekday[d.getDay()];
        
        
        let hours = d.getHours();
        let minutes = d.getMinutes();
        let period = "AM";
        if(hours>11){
            period = "PM";
            if(hours>12){
                hours = hours-12;
            }
            if(minutes<10){
                minutes=0+minutes;
            }
        }
        let time=hours+":"+minutes+""+period;
       // console.log(time);
       days.innerHTML=day;
        times.innerHTML=time;
       
// regarding to city search   

const ag = document.querySelector(".btninsearch");
const city_name = document.querySelector('.af');
// const box_display= document.querySelector('.box');
const temp=document.querySelector('#temp');
const temp_status=document.querySelector('tem_status');
// let boxflag=false;
// if(boxflag){
//          box_display.style.display="flex";
// }else{
//             box_display.style.display="none";
// }
const cityinf=async(event)=>{
    // boxflag=true;
     event.preventDefault();

     let city_value = city_name.value;
     let title=document.querySelector('.card-title');
  if(city_value===""){
    temp.innerText="";
      title.innerHTML=`Plz write city name before search`;

  }else{
    try{

        let url=`http://api.openweathermap.org/data/2.5/weather?q=${city_value}&units=metric&appid=6d586c5f41ef58f6c5086116ff25db1f`;
    const responce=await fetch(url);
    const data=await responce.json();
    const arrdata=[data];
    // title.innerHTML=`${arrdata[0].name},${arrdata[0].sys.country}`;
       title.innerHTML=`${arrdata[0].name},${arrdata[0].sys.country}`;
    // alert(`${arrdata[0].name},${arrdata[0].sys.country}`);
   temp.innerText=arrdata[0].main.temp;

   const tempMod=arrdata[0].weather[0].description;
//    console.log(tempMod);
 //alert(tempMod);
//    temp_status.innerHTML=tempMod;
         
// if(tempMod==="broken clouds"){
    //  alert("now i am working properly");
    //  temp.append('<i class="fa fa-trash-o" aria-hidden="true"></i>');
    // temp_status.innerHTML=
    // '<i class="fa-solid fa-sun" style="color: #eccc68;"></i>'
// } 
// else if(timeMod==="Clouds"){
//     temp_status.innerHTML=
//     '<i class="fa-solid fa-cloud" style="color: #f1f2f6;"></i>'
// }else if(timeMod==="Rain"){
//     temp_status.innerHTML=
//     '<i class="fa-solid fa-cloud-drizzle" style="color: #a40be;"></i>'
// }{
//     temp_status.innerHTML=
//     '<i class="fa-solid fa-cloud" style="color: #f1f2f6;"></i>'
// }

    }catch{

        // console.log(error);
        temp.innerText="";
        title.innerHTML=`Plz write city name properly`;


    }

    
  }
    
}
city_name.addEventListener('keyup', (e)=>{
    if (e.key === 'Enter') {
      
        cityinf(e);
    }
})
ag.addEventListener("click",cityinf);


