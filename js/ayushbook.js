let select2 = document.querySelector(".buton2");
let select3 = document.querySelector(".budiploma");
let select4 = document.querySelector(".buton2diploma");
let select1 = document.querySelector(".buton");

//   let select3 = document.querySelector("#select3");
//   let oopt4 = document.querySelector("#select3 .option4");
 console.log(select3);
   select1.addEventListener("change" , (event)=>{
    trackoption3(event.target);   
   });
   select3.addEventListener("change" , (events)=>{
      trackoption4(events.target);
   });

   const trackoption4=(events)=>{
    let myselectoption2 = events.value;
    if(myselectoption2==="Chose Branch"){
      select4.style.display="none";
     
    }
    else{
        select4.style.display="list-item";
       
    } 
   
   };
 
//    select2.addEventListener("change" , ()=>{
//     select3.style.display="list-item";
const trackoption3=(event)=>{
    let myselectoption = event.value;
    if(myselectoption==="Chose Branch"){
      select2.style.display="none";
     
    }
    else{
        select2.style.display="list-item";
       
    }
   
};
// const trackoption4=(events)=>{
//     let myselectoption2 = events.value;
//       console.log(myselectoption2);
//     if(myselectoption2==="Chose Branch"){
//       select4.style.display="none";
     
//     }
//     else{
//         select4.style.display="list-item";
       
//     }
   
// };