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

    newButton.innerHTML = "Done!";  
    newButton2.innerHTML = "Un-do!";

    newButton2.addEventListener("click", myFunction2);

function myFunction2() {
    // newTweet.remove();
    // newButton.remove();
   
    newTweet.style.textDecoration.toggle
    newTweet.style.textDecorationColor.toggle
    newTweet.style.color.toggle

}

    newButton.addEventListener("click", myFunction);

function myFunction() {
    // newTweet.remove();
    // newButton.remove();
   
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
    
});
