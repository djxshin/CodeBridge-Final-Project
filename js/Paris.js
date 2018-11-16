// Paris bogo modal starts

    
    // ******** JS for fairfax pic modal*************
    
    // variale to establish the modal (get the modal)
    var modal5 = document.getElementById("modalP");

    // establish variable button that opens the modal
    var at5 = document.getElementById("openP1");
    
    // Get the <span> element that closes the modal
    var span6 = document.getElementsByClassName("closeP")[0];
    // calling the first index of the class.
    
    // clicks on the button, open the modal  *button id = openLA
    at5.onclick = function() {
        modal5.style.display = "block";
       // onlick JS to change the CSS display:block;
    }
    
    
    // When the user clicks on <span> (x), close the modal
    
    span6.onclick = function() {
        modal5.style.display = "none";
     // onlick JS to change the CSS display:none;
    }
    
    // When the user clicks anywhere outside of the modal(aka window), close it
    window.onclick = function(outside) {
        if (outside.target == modal5) {
            modal5.style.display = "none";
             // else. if outside the modal1 box, close.
        }
    }

// Paris bogo ends