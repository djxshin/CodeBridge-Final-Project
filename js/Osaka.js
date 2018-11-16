// Osaka bogo modal starts

   // ******** JS for fairfax pic modal*************
    
    // variale to establish the modal (get the modal)
    var modal10 = document.getElementById("modalO");

    // establish variable button that opens the modal
    var at10 = document.getElementById("openO1");
    
    // Get the <span> element that closes the modal
    var span11 = document.getElementsByClassName("closeO")[0];
    // calling the first index of the class.
    
    // clicks on the button, open the modal  *button id = openLA
    at10.onclick = function() {
        modal10.style.display = "block";
       // onlick JS to change the CSS display:block;
    }
    
    
    // When the user clicks on <span> (x), close the modal
    
    span11.onclick = function() {
        modal10.style.display = "none";
     // onlick JS to change the CSS display:none;
    }
    
    // When the user clicks anywhere outside of the modal(aka window), close it
    window.onclick = function(outside) {
        if (outside.target == modal10) {
            modal10.style.display = "none";
             // else. if outside the modal1 box, close.
        }
    }

// Osaka bogo ends  