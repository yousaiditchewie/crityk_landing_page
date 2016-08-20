(function() {
  var idx = 1;

  $(document).ready(function(){
    // console.log("JS ready!")
    $('.modal-trigger').leanModal();
    $('.parallax').parallax();
    // if (!window.matchMedia('only screen and (max-device-width: 800px) and (-webkit-min-device-pixel-ratio: 2)').matches) {
    setTimeout(fadeOutRight, 5500);
    // };
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
  var signupSayings = ["KEEP ME IN THE LOOP",
                       "KEEP ME IN THE LOOP",
                       "KEEP ME IN THE LOOP",
                       "KEEP ME IN THE LOOP"
                      ];

  // FUNCTION FOR ITERATING THROUGH IDX
  function idxIterator() {
    return idx === 3 ? idx = 0 : idx++;
  };

  // FUNCTION FOR FADING OUT RIGHT
  // #1 in animation loop
  function fadeOutRight() {
    // console.log('fading out right');
    removeFadeLeft();
    addFadeRight();
    setTimeout(changeWords, 1750);
  };

  // FUNCTION FOR CHANGING WORDS
  // #2 in animation loop
  function changeWords() {
    // console.log('changing words ' + idx);
    topWords.innerHTML = topSayings[idx];
    bottom.innerHTML   = bottomSayings[idx];
    // signup.innerHTML   = signupSayings[idx];
    // idxIterator();
    setTimeout(fadeInLeft, 10);
    // return idx;
  };


  // FUNCTION FOR FADING IN LEFT
  // #3 in animation loop
  function fadeInLeft() {
    // console.log('fading in left');
    signup.innerHTML   = signupSayings[idx]; // placing this here prevents users from seeing the text change
    idxIterator();
    removeFadeRight();
    addFadeLeft();
    setTimeout(fadeOutRight, 6000);
  }

  // FADE IN/OUT HELPER FUNCTIONS
  function removeFadeRight() {
    topWords.classList.remove('fadeOutRight');
    bottom.classList.remove('fadeOutRight');
    signup.classList.remove('fadeOutRight');
  }

  function removeFadeLeft() {
    signup.classList.remove('fadeInLeft');
    topWords.classList.remove('fadeInLeft');
    bottom.classList.remove('fadeInLeft');
  }
  function addFadeRight() {
    signup.classList.add('fadeOutRight');
    topWords.classList.add('fadeOutRight');
    bottom.classList.add('fadeOutRight');
  }

  function addFadeLeft() {
    topWords.classList.add('fadeInLeft');
    bottom.classList.add('fadeInLeft');
    signup.classList.add('fadeInLeft');
  }

  // ELEVATOR JS VARIABLES AND FUNCTIONS
  var chevron = document.getElementById("chevron");
  var logo = document.getElementById("logo");
  var logoM = document.getElementById("logoM");
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
    element: logoM,
    targetElement: document.querySelector("#aboutus")
    });
  new Elevator({
    element: aboutuslink,
    targetElement: document.querySelector("#aboutus")
    });

})();
