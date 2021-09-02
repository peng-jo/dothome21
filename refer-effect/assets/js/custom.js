{
  //code view
  document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('pre code').forEach((el) => {
      hljs.highlightElement(el);
    });
  });
  //Modal
  document.querySelector(".info button").addEventListener("click",()=>{
    document.querySelector("#modal").className = "";
    document.querySelector("#modal").classList.add("show");
  });
  
  document.querySelector("#modal button").addEventListener("click",()=>{
    document.querySelector("#modal").classList.add("hide");
  });
  //Code tab menu
  const tabView = document.querySelectorAll(".view-title ul li");
  const tabViewCont = document.querySelectorAll(".view-cont > div");

  tabView.forEach( ( element, index ) =>{
    element.addEventListener("click",function(){
      tabView.forEach((el)=>{
            el.classList.remove("active");
        });
        element.classList.add("active");

        tabViewCont.forEach(el => {
            el.style.display = "none";
        });
        tabViewCont[index].style.display = "block";
    });
})
  
}
