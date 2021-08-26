function addToggleEvent(btn, span){
  btn.addEventListener("click",()=>{
      span.classList.toggle("none");
  });
};

function makeToggle(text){
  const toggle = document.createElement("div");
  toggle.className = "toggle";

  const btn = document.createElement("button");
  btn.className ="toggle-btn";
  btn.innerText ="결과보기";

  const span = document.createElement("span");
  span.className = "toggle-result"
  span.textContent = text ;

  addToggleEvent(btn, span);

  toggle.appendChild(btn);
  toggle.appendChild(span);
  
  return toggle;
}
function makeResult( id, text ){
  if( arguments.length > 2){
    const sliced = [].slice.call(arguments, 1);
    console.log(sliced.toString(), )
    document.querySelector(`#sample${id} .code`).appendChild(makeToggle(sliced.toString().replace(/\,/g," ")));
  }else{
    document.querySelector(`#sample${id} .code`).appendChild(makeToggle(text));   
  }
}