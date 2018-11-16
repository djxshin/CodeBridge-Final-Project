// Shibuya bogo modal starts

   // ******** JS for fairfax pic modal*************
    
    // variale to establish the modal (get the modal)
    var modal7 = document.getElementById("modalS");

    // establish variable button that opens the modal
    var at7 = document.getElementById("openS1");
    
    // Get the <span> element that closes the modal
    var span8 = document.getElementsByClassName("closeS")[0];
    // calling the first index of the class.
    
    // clicks on the button, open the modal  *button id = openLA
    at7.onclick = function() {
        modal7.style.display = "block";
       // onlick JS to change the CSS display:block;
    }
    
    
    // When the user clicks on <span> (x), close the modal
    
    span8.onclick = function() {
        modal7.style.display = "none";
     // onlick JS to change the CSS display:none;
    }
    
    // When the user clicks anywhere outside of the modal(aka window), close it
    window.onclick = function(outside) {
        if (outside.target == modal7) {
            modal7.style.display = "none";
             // else. if outside the modal1 box, close.
        }
    }

// Shibuya bogo ends  