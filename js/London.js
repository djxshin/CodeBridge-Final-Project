// London bogo modal starts

    
    // ******** JS for fairfax pic modal*************
    
    // variale to establish the modal (get the modal)
    var modal4 = document.getElementById("modalL");

    // establish variable button that opens the modal
    var at4 = document.getElementById("openL1");
    
    // Get the <span> element that closes the modal
    var span5 = document.getElementsByClassName("closeL")[0];
    // calling the first index of the class.
    
    // clicks on the button, open the modal  *button id = openLA
    at4.onclick = function() {
        modal4.style.display = "block";
       // onlick JS to change the CSS display:block;
    }
    
    
    // When the user clicks on <span> (x), close the modal
    
    span5.onclick = function() {
        modal4.style.display = "none";
     // onlick JS to change the CSS display:none;
    }
    
    // When the user clicks anywhere outside of the modal(aka window), close it
    window.onclick = function(outside) {
        if (outside.target == modal4) {
            modal4.style.display = "none";
             // else. if outside the modal1 box, close.
        }
    }

// London bogo ends