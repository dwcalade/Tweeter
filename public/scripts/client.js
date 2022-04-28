/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {

  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  //Slide the new tweet box

  $('#arrow').click(
    function() {
      $('.new-tweet').slideDown()
    })
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
              ${escape(tweet.content.text)}
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
          </section>`
        ;
      return $tweet;
    };
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
    event.preventDefault();

    $('#empty').slideUp();
    $('#long-error').slideUp();
    $('.new-tweet').slideUp()

    const newTweetData = event.target[0].value
    if (!newTweetData) {
      $('#empty').slideDown()
      $('.new-tweet').slideDown()
      return
    }

    if (newTweetData.length > 140) {
      $('#long-error').slideDown()
      $('.new-tweet').slideDown()
      return
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
});