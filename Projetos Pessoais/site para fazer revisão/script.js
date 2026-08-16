const h1 = document.querySelector("h1");
const a = document.querySelector("a");

h1.addEventListener("mouseover", function(){
    h1.classList.add('colorH1');
  
});
h1.addEventListener("mouseout", function(){
      setTimeout(function(){
        h1.classList.remove('colorH1')
    },100);
});

a.addEventListener("mouseover", function(){
    a.classList.add('colorH1');
  
});
a.addEventListener("mouseout", function(){
      setTimeout(function(){
        a.classList.remove('colorH1')
    },100);
});
