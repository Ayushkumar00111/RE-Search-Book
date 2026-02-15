 let select3 = document.querySelector(".budiploma");
let select4 = document.querySelector(".buton2diploma");
let select8year = document.querySelector(".buton2diploma5");//last
let btech = document.querySelector(".SEMESTERLINE");
let select5 = document.querySelector(".budiploma2");
let select8diploma = document.querySelector(".budiploma6");//last
let select6 = document.querySelector(".budiploma3");
let select7 = document.querySelector(".budiploma4");
let btech2= document.querySelector(".SEMESTERLINE2");
let btech3= document.querySelector(".SEMESTERLINE3");
let btech5= document.querySelector(".SEMESTERLINE5");
let btech6= document.querySelector(".SEMESTERLINE6");
let btech4= document.querySelector(".SEMESTERLINE4");

let btechnew2= document.querySelector(".SEMESTERLINE9");//last
let btech6new3= document.querySelector(".SEMESTERLINE10");//last



let btech7= document.querySelector(".SEMESTERLINE7");
let btech8= document.querySelector(".SEMESTERLINE8");
console.log(btech);



// select3.addEventListener("change" , (events)=>{
//     trackoption4(events.target);
//  });










///
select4.addEventListener("change" , (values)=>{
         Transfer(values.target);
});



const Transfer=(values)=>{
     let touchvalue = values.value;

     if(touchvalue==="2nd Year"){
      btech.innerText="3rd Semester";
      btech2.innerText="4th Semester";
     }
     else if (touchvalue==="1st Year"){
        btech.innerText="1st Semester";
        btech2.innerText="2nd Semester";
       }
     else  if(touchvalue==="3rd Year"){
        btech.innerText="5th Semester";
        btech2.innerText="6th Semester";
       }
       else if(touchvalue==="4th Year"){
        btech.innerText="7th Semester";
        btech2.innerText="8th Semester";
       }
};

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
 
 
select5.addEventListener("change" , (values2)=>{
      Transfer2(values2.target);
   });

   const Transfer2=(values2)=>{
      let touchvalue2 = values2.value;
      console.log(touchvalue2);
      if(touchvalue2==="2nd Year"){
       btech3.innerText="3rd Semester";
       btech4.innerText="4th Semester";
      }
      else if (touchvalue2==="1st Year"){
         btech3.innerText="1st Semester";
         btech4.innerText="2nd Semester";
        }
      else  if(touchvalue2==="3rd Year"){
         btech3.innerText="5th Semester";
         btech4.innerText="6th Semester";
        }
      }; 


select6.addEventListener("change" , (events3)=>{
         trackoption6(events3.target);
      });
  
      
      const trackoption6=(valuesnew)=>{
         let touchvaluenew = valuesnew.value;
         console.log(touchvaluenew);
         if(touchvaluenew==="2nd Year"){
          btech5.innerText="3rd Semester";
          btech6.innerText="4th Semester";
         }
         else if (touchvaluenew==="1st Year"){
            btech5.innerText="1st Semester";
            btech6.innerText="2nd Semester";
           }
         else  if(touchvaluenew==="3rd Year"){
            btech5.innerText="5th Semester";
            btech6.innerText="6th Semester";
           }
         }; 
   
 
         



 select7.addEventListener("change" , (events4)=>{
            trackoption7(events4.target);
         });       


         
const trackoption7=(values4)=>{
   let touchvalue4 = values4.value;
   console.log(touchvalue4);
   if(touchvalue4==="2nd Year"){
    btech7.innerText="3rd Semester";
    btech8.innerText="4th Semester";
   }
   else if (touchvalue4==="1st Year"){
      btech7.innerText="1st Semester";
      btech8.innerText="2nd Semester";
     }
   
   };


   select8diploma.addEventListener("change",(events7)=>{
  
      trackoption5(events7.target);
   }); 


   const trackoption5=(events44)=>{
      let myselectoption7 = events44.value;
     
      if(myselectoption7==="Chose Branch"){
         select8year.style.display="none";
       
      }
      else{
         select8year.style.display="list-item";
         
      } 
     
     };



     select8year.addEventListener("change" , (events6)=>{
  
      trackoption9(events6.target);
   }); 


   const trackoption9=(values5)=>{
      let touchvalue5 = values5.value;
      console.log(touchvalue5);
      if(touchvalue5==="2nd Year"){
       btechnew2.innerText="3rd Semester";
       btech6new3.innerText="4th Semester";
      }
      else if (touchvalue5==="1st Year"){
         btechnew2.innerText="1st Semester";
         btech6new3.innerText="2nd Semester";
        }
      else  if(touchvalue5==="3rd Year"){
         btechnew2.innerText="5th Semester";
         btech6new3.innerText="6th Semester";
        }
      };