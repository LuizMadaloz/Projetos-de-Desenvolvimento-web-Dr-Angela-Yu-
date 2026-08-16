const h1 = document.querySelector("h1");

h1.addEventListener("mouseover", function(){
    h1.classList.add('colorH1');
  
});
h1.addEventListener("mouseout", function(){
      setTimeout(function(){
        h1.classList.remove('colorH1')
    },100);
});
