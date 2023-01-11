// test
// ! test2

var height = 6; // number of guesses
var width = 5; // length of word

var row = 0; // current guess (attempt #)
var col = 0; // current letter for that attempt

var gameOver = false;
var word = "SQUID";

window.onload = function(){
    initialize();
}

function initialize() {
    // create the game board
    /*
    theoretically, this could be done in HTML.
    but i would have to repeat this process 30 times.
    JavaScript makes this much easier.
    */
    for(let r = 0; r < height; r++) {
        for(let c = 0; c < width; c++) {
            // <span id="0=0" class="tile">P</span>
            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = ""; // empty at the start
            document.getElementById("board").appendChild(tile);
        }
    }

    // Listen for Key Press
    document.addEventListener("keyup", (e) => {
        if(gameOver) return;

        //! Add letter
        // alert(e.code);
        if("KeyA" <= e.code && e.code <= "KeyZ") {
            if(col < width) {
                let currTile = document.getElementById(row.toString() + "-" + col.toString());
                if(currTile.innerText == "") {
                    currTile.innerText = e.code[3];
                    col += 1;
                }
            }
        }
        //! Delete letter
        else if(e.code == "Backspace") {
            if(0 < col && col <= width) {
                col -=1;
            }
            let currTile = document.getElementById(row.toString() + "-" + col.toString());
            currTile.innerText = "";
        }
        //! Enter word
        else if(e.code == "Enter") {
            update();
            row += 1;
            col = 0;
        }
    })
}