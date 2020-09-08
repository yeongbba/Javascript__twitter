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


// generateNewTweet을 호출할 때마다 새로운 트윗을 생성합니다.
//console.log(generateNewTweet());

//document.getElementById('test').innerHTML = 'hello twittler, check developer console!';