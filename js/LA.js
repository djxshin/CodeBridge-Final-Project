    
    // ******** JS for fairfax pic modal*************
    
    // variale to establish the modal (get the modal)
    var modal = document.getElementById('modalLA');

    // establish variable button that opens the modal
    var at = document.getElementById("openLA");
    
    // Get the <span> element that closes the modal
    var span1 = document.getElementsByClassName("closeLA")[0];
    // calling the first index of the class.
    
    // clicks on the button, open the modal  *button id = openLA
    at.onclick = function() {
        modal.style.display = "block";
        // onlick JS to make the block modal appear with the CSS display;
    }
    
    
    // When the user clicks on <span> (x), close the modal
    
    span1.onclick = function() {
        modal.style.display = "none";
     // onlick JS to make the modal box disappear with the lick of "X" ;
    }
    
    // When the user clicks anywhere outside of the modal(aka window), close it
    window.onclick = function(outside) {
        if (outside.target == modal) {
            modal.style.display = "none";
        }
    }

// faixfax pic modal ends*************************

// LAbogo modal starts
    
    // variale to establish the modal (get the modal)
    var modal1 = document.getElementById('modalLA1');

    // establish variable button that opens the modal
    var at1 = document.getElementById("openLA1");
    
    // Get the <span> element that closes the modal
    var span2 = document.getElementsByClassName("closeLA1")[0];
    // calling the first index of the class.
    
    // clicks on the button, open the modal  *button id = openLA
    at1.onclick = function() {
        modal1.style.display = "block";
       // onlick JS to change the CSS display:block;
    }
    
    
    // When the user clicks on <span> (x), close the modal
    
    span2.onclick = function() {
        modal1.style.display = "none";
     // onlick JS to change the CSS display:none;
    }
    
    // When the user clicks anywhere outside of the modal(aka window), close it
    window.onclick = function(outside1) {
        if (outside1.target == modal1) {
    // if clicked taraget is inside the modal1 box, don't close
            modal1.style.display = "none";
        // else. if outside the modal1 box, close.
        }
    }

// ***** most of the modals are the same so I'll give most detailed comment about the modal in here





