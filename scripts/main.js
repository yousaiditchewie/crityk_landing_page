(function() {
  var idx = 1;

  $(document).ready(function(){
    // console.log("JS ready!")
    $('.modal-trigger').leanModal();
    $('.parallax').parallax();
    if (!window.matchMedia('only screen and (max-device-width: 800px) and (-webkit-min-device-pixel-ratio: 2)').matches) {
    setTimeout(fadeOutRight, 4000);
    };
  });

  // ***ANIMATE AND CHANGE TITLES ON MAIN PAGE***
  // VARIABLES FOR h3 ID'S
  var topWords = document.getElementById("topWords");
  var bottom   = document.getElementById("bottom");
  var signup   = document.getElementById("signup");

  // VARIABLES FOR TOPWORDS SAYINGS
  var topSayings    = ["WE KNOW YOU LIKE FOOD",
                       "LIKE TO TALK TO YOUR FOOD?",
                       "BAD DATES, GOOD FOOD",
                       "(SILENCE) IT WAS THAT GOOD, EH?"
                      ];

  // VARIABLES FOR BOTTOM SAYINGS
  var bottomSayings = ["GOOD NEWS! FOOD LIKES YOU TOO!",
                       "GOOD NEWS, YOUR FOOD IS ALL EARS!",
                       "AT LEAST YOU CAN TALK TO YOUR FOOD",
                       "DON'T HATE, SHARE WITH YOUR FRIENDS"
                      ];

  // VARIABLES FOR SIGNUP SAYINGS
  var signupSayings = ["GET ALONG WITH FOOD ON CRITYK",
                       "TALK TO YOUR FOOD ON CRITYK",
                       "CRITYK, THE BEST PART OF YOUR DATE",
                       "SHARING IS CARING ON CRITYK"
                      ];

  // FUNCTION FOR ITERATING THROUGH IDX
  function idxIterator() {
    return idx === 3 ? idx = 0 : idx++;
  };

  // FUNCTION FOR FADING OUT RIGHT
  // #1 in animation loop
  function fadeOutRight() {
    // console.log('fading out right');
    topWords.classList.remove('fadeInLeft');
    bottom.classList.remove('fadeInLeft');
    signup.classList.remove('fadeInLeft');
    topWords.classList.add('fadeOutRight');
    bottom.classList.add('fadeOutRight');
    signup.classList.add('fadeOutRight');
    setTimeout(changeWords, 1000);
  };

  // FUNCTION FOR CHANGING WORDS
  // #2 in animation loop
  function changeWords() {
    // console.log('changing words ' + idx);
    topWords.innerHTML = topSayings[idx];
    bottom.innerHTML   = bottomSayings[idx];
    signup.innerHTML   = signupSayings[idx];
    idxIterator();
    setTimeout(fadeInLeft, 1000);
    // return idx;
  };


  // FUNCTION FOR FADING IN LEFT
  // #3 in animation loop
  function fadeInLeft() {
    // console.log('fading in left');
    topWords.classList.remove('fadeOutRight');
    bottom.classList.remove('fadeOutRight');
    signup.classList.remove('fadeOutRight');
    topWords.classList.add('fadeInLeft');
    bottom.classList.add('fadeInLeft');
    signup.classList.add('fadeInLeft');
    setTimeout(fadeOutRight, 5500);
  }

  // ELEVATOR JS VARIABLES AND FUNCTIONS
  var chevron = document.getElementById("chevron");
  var logo = document.getElementById("logo");
  var aboutuslink = document.getElementById("aboutuslink");
  new Elevator({
    element: chevron,
    targetElement: document.querySelector("#aboutus")
    });
  new Elevator({
    element: logo,
    targetElement: document.querySelector("#aboutus")
    });
  new Elevator({
    element: aboutuslink,
    targetElement: document.querySelector("#aboutus")
    });
})();
