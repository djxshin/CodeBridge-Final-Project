var change3 = () => {
      // created a function called change
    document.getElementById("question1").style.color = 'black';
    
    document.getElementById("question1").style.opacity = "1";

    document.getElementById("question1").style.fontSize = '50px';
     // used document .getElementsbyID to call the id to change color by calling CSS
}   // used .style display function to change the style of the content that we called with an id

function Move() {
    var box = document.getElementById("blimp");
    var position = 0;
    var interval = setInterval(frame, 10); 
    // 1. declare variable 
    // 2. declare variable saying where that position is
    // 3. Var ID; run the function + time

    

                // 5000 ms = 5 secs  frame = function we haven't declared yet
    function frame() {
        // 4. declare function frame
        if (position == 1500) {
            clearInterval(interval);
            // 5. declare if statement for function frame

        }
        else {
            position++;
              // increment position by +1 in a loop
            box.style.left = position + 'px';
            //  style var box top position
           
           
      
       }
       
    } 
}

