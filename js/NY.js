// NYbogo modal starts

    
    // ******** JS for fairfax pic modal*************
    
    // variale to establish the modal (get the modal)
    var modal2 = document.getElementById("modalNY");

    // establish variable button that opens the modal
    var at2 = document.getElementById("openNY1");
    
    // Get the <span> element that closes the modal
    var span3 = document.getElementsByClassName("closeNY")[0];
    // calling the first index of the class.
    
    // clicks on the button, open the modal  *button id = openLA
    at2.onclick = function() {
        modal2.style.display = "block";
       // onlick JS to change the CSS display:block;
    }
    
    
    // When the user clicks on <span> (x), close the modal
    
    span3.onclick = function() {
        modal2.style.display = "none";
     // onlick JS to change the CSS display:none;
    }
    
    // When the user clicks anywhere outside of the modal(aka window), close it
    window.onclick = function(outside) {
        if (outside.target == modal2) {
            modal2.style.display = "none";
            // else. if outside the modal1 box, close.
        }
    }

// NYbogo ends