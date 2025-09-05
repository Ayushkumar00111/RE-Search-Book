let year = document.querySelector(".button333");
let course = document.querySelector(".button33");

course.addEventListener("change",(events)=>{
      yearchnage(events.target);
});

const yearchnage=(values)=>{
    let myselectoptionjs = values.value;
    if(myselectoptionjs==="Chose Course"){
        year.style.display="none";
      
     }
     else{
        year.style.display="list-item";
        
     } 
};