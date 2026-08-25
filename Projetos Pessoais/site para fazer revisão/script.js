const h1 = document.querySelector("h1");
const a = document.querySelectorAll("a");

h1.addEventListener("mouseover", function(){
    h1.classList.add('colorH1');
  
});
h1.addEventListener("mouseout", function(){
      setTimeout(function(){
        h1.classList.remove('colorH1')
    },100);
});
a.forEach ((element)=>{
    element.addEventListener("mouseover", function(){
    element.classList.add('colorH1')});

    element.addEventListener("mouseout", function(){
      setTimeout(function(){
        element.classList.remove('colorH1')
    },100);
});    
});