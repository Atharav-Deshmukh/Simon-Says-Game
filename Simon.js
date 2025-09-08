let Game_Sequence = [];
let User_Sequence = [];

let btns = ["first", "second", "third", "fourth"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keydown", function() {
    if (started == false) {
        console.log("Game Is Started");
        started = true;
       levelUp();
    }
});

//-------------------------------------------------------------------------------------
    function levelUp() {
        User_Sequence = [];
        // user have to enter from start

        level++;
        h2.innerText = `Level ${level}`;

        let randIdx = Math.floor(Math.random() * 4);

        let randColor =  btns[randIdx];
        Game_Sequence.push(randColor);
        console.log(Game_Sequence)

        let randBtn = document.querySelector(`.${randColor}`);
        Game_Flash(randBtn);
        
        console.log("Random Index ",randIdx);   console.log("Random Color ", randColor);    console.log("Random Button ", randBtn);
    }

    function Game_Flash(btn) {
        if (!btn) {
            return;
        }
        btn.classList.add("flash");

        setTimeout(function () {
            btn.classList.remove("flash");
        }, 250);
    }
//-------------------------------------------------------------------------------------

let AllButton = document.querySelectorAll(".btnn");
for(allbtn of AllButton) {
    allbtn.addEventListener("click", btnPress)
}

function btnPress() {
    console.log("Button Is Pressed By User")
    console.log(this)

    let btn = this;
    user_flash(btn)

    User_Color = btn.getAttribute("id")
    console.log( "User Entere => ", User_Color)
    User_Sequence.push(User_Color)
    console.log(User_Sequence)

    check(User_Sequence.length - 1);
}


    function user_flash(btn) {
        btn.classList.add("user_flash");

        setTimeout(function () {
            btn.classList.remove("user_flash");
        }, 250);
    }
 
    //-------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------

    function check(idx) {
        console.log("Current Level", level);
    
        if (User_Sequence[idx] === Game_Sequence[idx]) {
            if (User_Sequence.length == Game_Sequence.length) {
                setTimeout(levelUp, 1000);
            }
        } else {
            h2.innerHTML = `Game Over! Your score was <b>${level}</b>. Press any key to retry.`;
            
            // 'backgroundColor' is the correct property, not 'bag'.
            document.querySelector("body").style.backgroundColor = "red";
            // Revert the background color to create a "flash" effect.
            setTimeout(function() {
                document.querySelector("body").style.backgroundColor = "white"; // Or your original color
            }, 200);
    
            reset();
        }
    }
    
    function reset() {
        started = false;
        Game_Sequence = [];
        User_Sequence = [];
        level = 0;
    }