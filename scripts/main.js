(function(){


  console.log("JS loaded!")

    $(document).ready(function(){
      // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
      $('.modal-trigger').leanModal();
      $('.parallax').parallax();

      // ELEVATOR JS VARIABLES AND FUNCTIONS
      var chevron = document.getElementById("chevron");
      new Elevator({
        element: chevron,
        targetElement: document.querySelector("#aboutus"),
      });
  });

})();
