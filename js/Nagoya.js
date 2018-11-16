// Na bogo modal starts

   // ******** JS for fairfax pic modal*************
    
    // variale to establish the modal (get the modal)
    var modal9 = document.getElementById("modalN");

    // establish variable button that opens the modal
    var at9 = document.getElementById("openNA1");
    
    // Get the <span> element that closes the modal
    var span10 = document.getElementsByClassName("closeNA")[0];
    // calling the first index of the class.
    
    // clicks on the button, open the modal  *button id = openLA
    at9.onclick = function() {
        modal9.style.display = "block";
       // onlick JS to change the CSS display:block;
    }
    
    
    // When the user clicks on <span> (x), close the modal
    
    span10.onclick = function() {
        modal9.style.display = "none";
     // onlick JS to change the CSS display:none;
    }
    
    // When the user clicks anywhere outside of the modal(aka window), close it
    window.onclick = function(outside) {
        if (outside.target == modal9) {
            modal9.style.display = "none";
             // else. if outside the modal1 box, close.
        }
    }

// NA bogo ends  