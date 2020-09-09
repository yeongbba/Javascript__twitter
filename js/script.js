window.addEventListener('load', () => {
    for (let i = 0; i < DATA.length; i++) {
        let template = document.querySelector("template");
        let cloneNode = document.importNode(template.content, true);
        let spans = cloneNode.querySelectorAll("span");
        let commentBox = document.querySelector(".comment");
      
        spans[0].textContent = DATA[i].user;
        spans[1].textContent = DATA[i].created_at;
        spans[2].textContent = DATA[i].message;
      
        commentBox.appendChild(cloneNode);
      }
});


let tweetbtn = document.querySelector(".tweet__btn");

tweetbtn.addEventListener('click', () => {
    let template = document.querySelector("template");
    let cloneNode = document.importNode(template.content, true);
    let spans = cloneNode.querySelectorAll("span");
    let usernameInput = document.querySelector(".tweet__username input");
    let messageInput = document.querySelector(".tweet__message input");
    let commentBox = document.querySelector(".comment");

    spans[0].textContent = usernameInput.value;
    spans[1].textContent = new Date().format();
    spans[2].textContent = messageInput.value;

    commentBox.prepend(cloneNode);
  
});

function InsertToArray() {
    let tweetArr = [];
    for (let i = 0; i < 8; i++) {
        tweetArr.push(generateNewTweet());
    }
    return tweetArr;
};


let refreshBtn = document.querySelector(".refresh__btn");

refreshBtn.addEventListener('click', () => {
    let commentRows = document.querySelectorAll(".comment__row"); 
    for (let i = 0; i < commentRows.length; i++) {
        commentRows[i].remove();
    }

    let tweetArr = InsertToArray();
    for (let i = 0; i < tweetArr.length; i++) {
        let template = document.querySelector("template");
        let cloneNode = document.importNode(template.content, true);
        let spans = cloneNode.querySelectorAll("span");
        let commentBox = document.querySelector(".comment");
      
        spans[0].textContent = tweetArr[i].user;
        spans[1].textContent = tweetArr[i].created_at;
        spans[2].textContent = tweetArr[i].message;
        
        commentBox.append(cloneNode);
      }
});

//이름 누르면 똑같은 이림만,...
//document.getElementById('test').innerHTML = 'hello twittler, check developer console!';