// BKbogo modal starts

    
    // ******** JS for fairfax pic modal*************
    
    // variale to establish the modal (get the modal)
    var modal3 = document.getElementById("modalBK");

    // establish variable button that opens the modal
    var at3 = document.getElementById("openBK1");
    
    // Get the <span> element that closes the modal
    var span4 = document.getElementsByClassName("closeBK")[0];
    // calling the first index of the class.
    
    // clicks on the button, open the modal  *button id = openLA
    at3.onclick = function() {
        modal3.style.display = "block";
       // onlick JS to change the CSS display:block;
    }
    
    
    // When the user clicks on <span> (x), close the modal
    
    span4.onclick = function() {
        modal3.style.display = "none";
     // onlick JS to change the CSS display:none;
    }
    
    // When the user clicks anywhere outside of the modal(aka window), close it
    window.onclick = function(outside) {
        if (outside.target == modal3) {
            modal3.style.display = "none";
 // else. if outside the modal1 box, close.
        }
    }

// BKbogo ends