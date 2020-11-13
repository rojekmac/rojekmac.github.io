const tweetForm = document.querySelector('#tweetForm')
tweetForm.addEventListener('submit', function (e) {
    const newTweets = document.querySelector('#tweets')
    e.preventDefault();

    // const username = tweetForm.elements.username.value;
    const tweet = tweetForm.elements.tweet.value;

    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    const newButton = document.createElement("BUTTON");

    newButton.innerHTML = "x";  

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
    
});
