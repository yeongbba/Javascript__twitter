const commentBox = document.querySelector(".comment");
const tweetbtn = document.querySelector(".tweet__btn");
const refreshBtn = document.querySelector(".refresh__btn");
const gobackBtn = document.querySelector(".goback__btn");

function createBaseComment() {
  for (let i = 0; i < DATA.length; i++) {
    let template = document.querySelector("template");
    let cloneNode = document.importNode(template.content, true);
    let spans = cloneNode.querySelectorAll("span");

    spans[0].textContent = DATA[i].user;
    spans[1].textContent = DATA[i].created_at;
    spans[2].textContent = DATA[i].message;

    commentBox.appendChild(cloneNode);
  }
  addClickUserEvent();
}

function createNewTweet() {
  let template = document.querySelector("template");
  let cloneNode = document.importNode(template.content, true);
  let spans = cloneNode.querySelectorAll("span");
  let usernameInput = document.querySelector(".tweet__username input");
  let messageInput = document.querySelector(".tweet__message textarea");

  spans[0].textContent = usernameInput.value;
  spans[1].textContent = new Date().format();
  spans[2].textContent = messageInput.value;

  commentBox.prepend(cloneNode);
  usernameInput.value = "";
  messageInput.value = "";

  addClickUserEvent();
}

function refreshComment() {
  let template = document.querySelector("template");
  let cloneNode = document.importNode(template.content, true);
  let spans = cloneNode.querySelectorAll("span");
  let newTweet = generateNewTweet();

  spans[0].textContent = newTweet.user;
  spans[1].textContent = newTweet.created_at;
  spans[2].textContent = newTweet.message;

  commentBox.prepend(cloneNode);
  addClickUserEvent();
}

function goBackToList() {
  let comment = document.querySelectorAll(".comment__row");
  console.log(comment);
  for (let i = 0; i < comment.length; i++) {
    comment[i].classList.remove("display__none");
  }
  refreshBtn.classList.remove("display__none");
  gobackBtn.classList.add("display__none");
}

function addClickUserEvent() {
  let userArr = document.querySelectorAll(".comment__user");

  for (let i = 0; i < userArr.length; i++) {
    userArr[i].addEventListener("click", (e) => {
      for (let j = 0; j < userArr.length; j++) {
        if (e.target.textContent !== userArr[j].textContent) {
          userArr[j].parentElement.parentElement.classList.add("display__none");
        }
      }
      refreshBtn.classList.add("display__none");
      gobackBtn.classList.remove("display__none");
    });
  }
}

function init() {
  window.addEventListener("load", createBaseComment);
  tweetbtn.addEventListener("click", createNewTweet);
  refreshBtn.addEventListener("click", refreshComment);
  gobackBtn.addEventListener("click", goBackToList);
}

init();
