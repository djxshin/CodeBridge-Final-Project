// Harajuku bogo modal starts

   // ******** JS for fairfax pic modal*************
    
    // variale to establish the modal (get the modal)
    var modal6 = document.getElementById("modalH");

    // establish variable button that opens the modal
    var at6 = document.getElementById("openH1");
    
    // Get the <span> element that closes the modal
    var span7 = document.getElementsByClassName("closeH")[0];
    // calling the first index of the class.
    
    // clicks on the button, open the modal  *button id = openLA
    at6.onclick = function() {
        modal6.style.display = "block";
       // onlick JS to change the CSS display:block;
    }
    
    
    // When the user clicks on <span> (x), close the modal
    
    span7.onclick = function() {
        modal6.style.display = "none";
     // onlick JS to change the CSS display:none;
    }
    
    // When the user clicks anywhere outside of the modal(aka window), close it
    window.onclick = function(outside) {
        if (outside.target == modal6) {
            modal6.style.display = "none";
             // else. if outside the modal1 box, close.
        }
    }

// Harajuku bogo ends  
