/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {

  const createTweetElement = function (tweet) {

    let $tweet = ` 
    <section class='tweet'>

  <article>
    <header>
      <div class='avatar'>
      <img src=${tweet.user.avatars}>
      <h3>${tweet.user.name}</h3>
      </div>
      <h4 id='username'>${tweet.user.handle}</h4>
    </header>
    <main>
            <p>
              ${tweet.content.text}
            </p>
          </main>
          <footer id='tweet-foot'>
            <div class='foot-content'>
            <p>${timeago.format(tweet.created_at)}</p>
            <div id='icons'>
              <i class="fa-solid fa-flag"></i>
              <i class="fa-solid fa-repeat"></i>
              <i class="fa-solid fa-heart"></i>
            </div>
          </div>
          </footer>
        </article>
        </section`
      ;
    return $tweet;
  };

    });
    const renderTweets = function (arr) {
        const $container = $(".container");
        $.each(arr, (key) => {
            $container.prepend(createTweetElement(arr[key]));
        })
    
        console.log('this is the container:', $container)
        return $container;
      };

  //Submit form

  $( ".textarea" ).submit(function( event ) {
    $('#empty').slideUp();
    $('#long-error').slideUp();
    event.preventDefault();

    const newTweetData = event.target[0].value
    if (!newTweetData) {
      return $('#empty').slideDown()
    }

    if (newTweetData.length > 2) {
      return $('#long-error').slideDown()
    }


    $.ajax({
      method: "POST",
      url: "http://localhost:8080/tweets",
      data: $( this ).serialize()
    }).then( function () {
        loadTweets()
      }
      )
  });

  //fetching tweets from /tweets page

  const loadTweets = function() {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:8080/tweets',
    })
    .then(function (tweet) {
        renderTweets(tweet)
    });
    }
    loadTweets()
;