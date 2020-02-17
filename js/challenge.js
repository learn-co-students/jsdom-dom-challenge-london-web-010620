document.addEventListener("DOMContentLoaded", () => {
    let count;
    let countArray = [];
    let liCount;
    let span;
    let li;
    let newValue;

let counter = document.getElementById("counter");
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let heart = document.getElementById("heart");
let likes = document.querySelector(".likes");
let pause = document.getElementById("pause");
let submit = document.getElementById("submit");
let form = document.getElementById('comment-form');
let commentList = document.getElementById('list');


let timer = setInterval(countTime, 1000);
function countTime(){
  counter.innerText = parseInt(counter.innerText) + 1;
}


plus.addEventListener('click', function(e){
  counter.innerText = parseInt(counter.innerText) + 1;
}) 


minus.addEventListener('click', function(e){
  counter.innerText = parseInt(counter.innerText) - 1;
}) 

heart.addEventListener('click', function(e) {
    count = parseInt(counter.innerText);

    if (countArray.includes(count)) {
        liCount = document.querySelector('[data-num="'+count+'"]');
        span = liCount.querySelector('span');
        newValue = parseInt(span.innerText) + 1;
  
        liCount.innerHTML = `${count} has been liked <span>${newValue}</span> times`;
  
        li = liCount;
  
      } else { 
        countArray.push(count);

        li = document.createElement('li');
        li.setAttribute('data-num', count);
        li.innerHTML = `${count} has been liked <span>1</span> time`;
      }
      likes.appendChild(li);
})

pause.addEventListener('click', function(e) {

    if (pause.innerText === "pause") {

      clearInterval(timer);

      minus.disabled = true;
      plus.disabled = true;
      heart.disabled = true;
      submit.disabled = true;

      pause.innerText = "resume";
    } else {
      setInterval(countTime, 1000);

      minus.disabled = false;
      plus.disabled = false;
      heart.disabled = false;
      submit.disabled = false;

      pause.innerText = "pause";
    }
  })

  form.addEventListener('submit', function(event){
    event.preventDefault();

    let comment = document.getElementById('comment-input');

    if (comment.value === "") {
      return;
    } 

    let p = document.createElement('p');
    p.innerText = comment.value;
    commentList.appendChild(p);
    
    comment.value = "";   
  })   

});