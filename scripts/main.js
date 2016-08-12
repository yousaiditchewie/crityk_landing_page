// (function() {

  $(document).ready(function(){
    console.log("JS ready!")
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
    $('.parallax').parallax();
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

  // FUNCTION FOR CHANGING WORDS
  function changeWords(i) {
    topWords.innerHTML = topSayings[i];
    bottom.innerHTML = bottomSayings[i];
    signup.innerHTML = signupSayings[i];
  };

  // ELEVATOR JS VARIABLES AND FUNCTIONS
  var chevron = document.getElementById("chevron");
  new Elevator({
    element: chevron,
    targetElement: document.querySelector("#aboutus")
    });

// })();
