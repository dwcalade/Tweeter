/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const example = {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac",
    },
    content: {
      text: "If I have seen further it is by standing on the shoulders of giants",
    },
    created_at: 1461116232227,
  };
  const createTweetElement = function (tweet) {
    return `<section class="tweet">
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
        </section>`;
  };
  
  console.log(createTweetElement(example));
  