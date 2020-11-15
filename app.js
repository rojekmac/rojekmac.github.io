const tweetForm = document.querySelector('#tweetForm')
tweetForm.addEventListener('submit', function (e) {
    const newTweets = document.querySelector('#tweets')
    e.preventDefault();

    // const username = tweetForm.elements.username.value;
    const tweet = tweetForm.elements.tweet.value;

    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    const newButton = document.createElement("BUTTON");
    const newButton2 = document.createElement("BUTTON");
    const newButton3 = document.createElement("BUTTON");
    const newButton4 = document.createElement("BUTTON");

    newButton.innerHTML = "Done";  
    newButton2.innerHTML = "Un-do";
    newButton3.innerHTML = "Remove";
    newButton4.innerHTML = "Mark as urgent";

    newButton4.addEventListener("click", myFunction4);

function myFunction4() {

    newTweet.style.textDecoration = "underline";
    newTweet.style.color = "red";
    // newTweet.style.fontSize = "25px";
    newTweet.style.fontWeight = "bold"


}

    newButton3.addEventListener("click", myFunction3);

function myFunction3() {

    newTweet.remove();
    newButton.remove();
    newButton2.remove();
    newButton3.remove();
    newButton4.remove();

}



    newButton2.addEventListener("click", myFunction2);

function myFunction2() {

    newTweet.style.textDecoration = "none";
    newTweet.style.color = "black";

}

    newButton.addEventListener("click", myFunction);

function myFunction() {
   
   
    newTweet.style.textDecoration = "line-through";
    newTweet.style.textDecorationColor = "black";
    newTweet.style.color = "green";

}
   
    // bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(`${tweet}`)
    newTweets.append(newTweet)
    newTweets.append(newButton)
    newTweets.append(newButton2)
    newTweets.append(newButton3)
    newTweets.append(newButton4)
});
