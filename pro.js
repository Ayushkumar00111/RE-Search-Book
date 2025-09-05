let button = document.querySelector(".zero");
let button2 = document.querySelectorAll(".hard1");
let removebutoon = document.querySelector(".parahiden");
let back = document.querySelector(".back");

console.log(removebutoon);
button.addEventListener("click" , ()=>{
     removebutoon.style.display="list-item";
     document.querySelector(".hard1 div").classList.remove("zero");
     document.querySelector(".hard1 div").classList.add("zero2");
  //   button2.style.background="white";
    //  button2.style.color="rgb(13, 105, 105)";
    //  button2.style.border="3px solid white";
      button.innerText="Detalis";
     
      
    //  button2.style.boxShadow="none";
    //  button2.style.marginLeft="-20";
      button.style.fontSize="2rem";
    //  button2.style.cursor="none";
     
   
    
     
     
});
back.addEventListener("click" , ()=>{
    removebutoon.style.display="none";
    document.querySelector(".hard1 div").classList.remove("zero2");
    document.querySelector(".hard1 div").classList.add("zero");
   // let button3 = document.querySelector(".zero2");
  //  button2.style.backgroundColor="rgb(13, 105, 105)";
    //  button2.style.color="white";
    //  button2.style.border="0.5px solid rgb(3, 46, 42)";
      button.innerText="Read More";
    //  button2.style.boxShadow="6px 20px 20px rgba(0, 0, 0, 0.3)";
      button.style.fontSize="1.0rem";
    //  button2.style.cursor="pointer";
     
});