  let select1 = document.querySelector(".selecter");
  let select2 = document.querySelector("#select2");
  let select3 = document.querySelector("#select3");
  let oopt4 = document.querySelector("#select3 .option4");
  console.log(oopt4);
   select1.addEventListener("change" , (event)=>{
             trackoption(event.target);
   });
   select2.addEventListener("change" , ()=>{
    select3.style.display="list-item";
});
   const trackoption=(event)=>{
       let myselectoption = event.value;
       if(myselectoption ==="B.Tech" || myselectoption ==="Polytechnic"){
         select2.style.display="list-item";
         select3.style.display="none";
         oopt4.style.display="list-item";
        
       }
       else if(myselectoption==="BCA" || myselectoption==="B.COM" || myselectoption==="MBA"){
        select2.style.display="none";
        select3.style.display="list-item";
        oopt4.style.display="none";
        // let oopt4 = document.querySelector("#aopyon4");
        // oopt4.innerHTML=<Option disabled>4th year</Option>;
       }
   };
//    const trackoption2=(event)=>{
//     let myselectoption = event.value;
    
// };