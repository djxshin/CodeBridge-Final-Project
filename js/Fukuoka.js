// Fu bogo modal starts

   // ******** JS for fairfax pic modal*************
    
    // variale to establish the modal (get the modal)
    var modal11 = document.getElementById("modalF");

    // establish variable button that opens the modal
    var at11 = document.getElementById("openF1");
    
    // Get the <span> element that closes the modal
    var span12 = document.getElementsByClassName("closeF")[0];
    // calling the first index of the class.
    
    // clicks on the button, open the modal  *button id = openLA
    at11.onclick = function() {
        modal11.style.display = "block";
       // onlick JS to change the CSS display:block;
    }
    
    
    // When the user clicks on <span> (x), close the modal
    
    span12.onclick = function() {
        modal11.style.display = "none";
     // onlick JS to change the CSS display:none;
    }
    
    // When the user clicks anywhere outside of the modal(aka window), close it
    window.onclick = function(outside) {
        if (outside.target == modal11) {
            modal11.style.display = "none";
             // else. if outside the modal1 box, close.
        }
    }

// Fu bogo ends  