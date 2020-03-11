const countTime = () => {
    counter.innerText = parseInt(counter.innerText) + 1  
};

document.addEventListener("DOMContentLoaded", () => {
    let count;
    let countHash = {1: 4, 2:5, 69:420}; 
    // let countHash = {}; 

    let counter = document.getElementById("counter");
    let minus = document.getElementById("minus");
    let plus = document.getElementById("plus");
    let heart = document.getElementById("heart");
    let likes = document.querySelector(".likes");
    let pause = document.getElementById("pause");
    let submit = document.getElementById("submit");
    let form = document.getElementById('comment-form');
    let commentList = document.getElementById('list');
    
    let timer = setInterval(countTime, 2000)

   

    plus.addEventListener('click', () => {
        counter.innerText = parseInt(counter.innerText) + 1
    });

    minus.addEventListener('click', () => {
        counter.innerText = parseInt(counter.innerText) - 1 
    });

    heart.addEventListener('click', () => {
        const likedNumber = parseInt(counter.innerText)

        if (countHash.hasOwnProperty(likedNumber)) {
            countHash[likedNumber] += 1;
        } else {
            countHash[likedNumber] = 1;
        }

        renderLikeList()
        console.log (countHash)

    })

    function renderLikeList() {
        likes.innerHTML = ''

        // Object.keys(countHash).forEach( key => {

        // })

        for(let likedNumber in countHash) {
            const likedLi = document.createElement('li');
            likedLi.innerText = `${likedNumber} has been liked ${countHash[likedNumber]} times.`
            likes.append(likedLi)
        }
    }

    pause.addEventListener('click', () => {
        if (pause.innerText === 'pause') {
           clearInterval(timer)

           heart.disabled = true;
           plus.disabled = true;
           minus.disabled = true;
           submit.disabled = true;

           pause.innerText = "resume";
       } else {
            setInterval(countTime, 2000)

            heart.disabled = false;
            plus.disabled = false;
            minus.disabled = false;
            submit.disabled = false;

            pause.innerText = "pause"
       }
    }) 
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        let comment = document.getElementById('comment-input');
        let commentP = document.createElement('li');
        commentP.innerText = event.target.elements.comment.value
        
        commentList.append(commentP)
    }) 
})