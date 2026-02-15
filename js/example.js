let heading = document.querySelector(".access");
let heading2 = document.querySelector(".head");

let test = "hello";
heading.addEventListener("click",()=>{
    
       if(test === "hello" ){
        heading2.innerText="byyji";
        test = "byy";
       
       }else if(test === "byy"){
        heading2.innerText="helloji";
        test = "hello";
      
       }


        
});
