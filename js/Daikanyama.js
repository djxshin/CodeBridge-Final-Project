// Dai bogo modal starts

   // ******** JS for fairfax pic modal*************
    
    // variale to establish the modal (get the modal)
    var modal8 = document.getElementById("modalD");

    // establish variable button that opens the modal
    var at8 = document.getElementById("openDAI1");
    
    // Get the <span> element that closes the modal
    var span9 = document.getElementsByClassName("closeD")[0];
    // calling the first index of the class.
    
    // clicks on the button, open the modal  *button id = openLA
    at8.onclick = function() {
        modal8.style.display = "block";
       // onlick JS to change the CSS display:block;
    }
    
    
    // When the user clicks on <span> (x), close the modal
    
    span9.onclick = function() {
        modal8.style.display = "none";
     // onlick JS to change the CSS display:none;
    }
    
    // When the user clicks anywhere outside of the modal(aka window), close it
    window.onclick = function(outside) {
        if (outside.target == modal8) {
            modal8.style.display = "none";
             // else. if outside the modal1 box, close.
        }
    }

// Dai bogo ends  