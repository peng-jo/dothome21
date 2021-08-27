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
  span.innerHTML = text ;

  addToggleEvent(btn, span);

  toggle.appendChild(btn);
  toggle.appendChild(span);
  
  return toggle;
}

function makeResult( id, text ){
  if( arguments.length > 2 || typeof(text) === 'object'){
    const sliced = [].slice.call(arguments, 1);
    document.querySelector(`#sample${id} .code`).appendChild(makeToggle(sliced.toString().replace(/\,/g," ")));
  }else{
    document.querySelector(`#sample${id} .code`).appendChild(makeToggle(text));   
  }
}
/*
const print = new makeREsult2();
print.add(text);
print.print();
*/
function makeResult2(id){
  this.id = id;
  this.text = "";
}
makeResult2.prototype.add = function(text){
  
  if( typeof(Object) || arguments.length > 1 ){ //배열,객체거나 파라미터 길이가 1이상이면
    const sliced = [].slice.call(arguments, 0);
    this.text += sliced.toString().replace(/\,/g," "); //문자열로 만들고 ,를 제거한다.
  }else{
    this.text += text.toString();
  }
};

makeResult2.prototype.print = function(){
  document.querySelector(`#sample${this.id} .code`).appendChild(this.makeToggle(this.text));
}
makeResult2.prototype.addToggleEvent = function(btn, span){
  btn.addEventListener("click",()=>{
      span.classList.toggle("none");
  });
};
makeResult2.prototype.makeToggle = function(text){
  const toggle = document.createElement("div");
  toggle.className = "toggle";

  const btn = document.createElement("button");
  btn.className ="toggle-btn";
  btn.innerText ="결과보기";

  const span = document.createElement("span");
  span.className = "toggle-result"
  span.innerHTML = text ;

  this.addToggleEvent(btn, span);

  toggle.appendChild(btn);
  toggle.appendChild(span);
  
  return toggle;
}
