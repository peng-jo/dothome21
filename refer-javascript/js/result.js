function addToggleEvent(btn, span){
  $(btn).click(()=>{
      $(span).toggle("none");
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
    $(`#sample${id} .code`).append(makeToggle(sliced.toString().replace(/\,/g," ")));
  }else{
    $(`#sample${id} .code`).append(makeToggle(text));   
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
  $(`#sample${this.id} .code`).append(this.makeToggle(this.text));
}
makeResult2.prototype.addToggleEvent = function(btn, span){
  $(btn).click(()=>{
    $(span).toggle("none");
  });
};
makeResult2.prototype.makeToggle = function(text){
  const $toggle = $("<div></div>");
  $toggle.attr("class", "toggle");

  const $btn = $("<button></button>");
  $btn.attr("class", "toggle-btn");
  $btn.text("결과보기");

  const $span = $("<span></span>");
  $($span).attr("class","toggle-result");
  $($span).html(text);

  this.addToggleEvent($btn, $span);

  $($toggle).append($btn);
  $($toggle).append($span);
  
  return $toggle;
}
