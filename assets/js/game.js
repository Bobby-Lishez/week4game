(function(){
    //character data
    var p1 = {
        hp: 100,
        atk: 5,
        ctrAtk: 10
    };
    var p2 = {
        hp: 200,
        atk: 2,
        ctrAtk: 4
    };
    var p3 = {
        hp: 400,
        atk: 1,
        ctrAtk: 6
    };
    var p4 = {
        hp: 75,
        atk: 8,
        ctrAtk: 50
    };
    //active player
    var player = {
        hp: 0,
        atk: 0,
        baseAtk: 0
    };
    //active opponent
    var opponent = {
        hp:0,
        atk: 0
    };
    //function to choose active player
    function loadSelf(object) {
        //active player stats set to the chosen character's stats
        player.hp = object.hp;
        player.atk = object.atk;
        player.baseAtk = object.atk;
        console.log(player.hp, player.atk);
        //update the screen
        $("#yourHP").text(player.hp);
        $("#yourAtk").text(player.atk);
    }
    //function to choose active opponent
    function loadEnemy(object) {
        //active opponent stats set to chosen character's stats
        opponent.hp = object.hp;
        opponent.atk = object.ctrAtk;
        console.log(opponent.hp, opponent.atk);
        //update the screen
        $("#enemyHP").text(opponent.hp);
        $("#enemyAtk").text(opponent.atk);
    }
    //victory function
    function youWin() {
        //if all enemies are defeated, alert victory and reset the game
        if (
            document.querySelector("#goenemy1").disabled &&
            document.querySelector("#goenemy2").disabled &&
            document.querySelector("#goenemy3").disabled &&
            document.querySelector("#goenemy4").disabled
        ) {
        alert("you win");
        document.querySelector("#gameArea").style.display = "none";
        document.querySelector("#playerSelect").style.display = "block";
        document.querySelector("#goenemy1").disabled = false;
        document.querySelector("#goenemy2").disabled = false;
        document.querySelector("#goenemy3").disabled = false;
        document.querySelector("#goenemy4").disabled = false;
        }
        else {
        //otherwise, return to choose the next enemy
        alert("keep going")
        document.querySelector("#gameArea").style.display = "none";
        document.querySelector("#enemySelect").style.display = "block";
        }  
    }
    //game over function. Alert defeat and reset the game
    function gameOver() {
        alert("game over");
        document.querySelector("#gameArea").style.display = "none";
        document.querySelector("#playerSelect").style.display = "block";
        document.querySelector("#goenemy1").disabled = false;
        document.querySelector("#goenemy2").disabled = false;
        document.querySelector("#goenemy3").disabled = false;
        document.querySelector("#goenemy4").disabled = false;
    }
    //click listener for player select screen
    $(".btn-playerSelect").click(function(event) {
        //hide the player select screen and bring up the enemy select screen
        document.querySelector("#playerSelect").style.display = "none";
        document.querySelector("#enemySelect").style.display = "block";
        //update the screen in the game area
        $("#you").text(event.target.value);
        //set active player and disable enemy selection from choosing the same character
        switch (event.target.id){
            case "gop1": 
                loadSelf(p1); 
                document.querySelector("#goenemy1").disabled = true;
                break;
            case "gop2": 
                loadSelf(p2); 
                document.querySelector("#goenemy2").disabled = true;
                break;
            case "gop3": 
                loadSelf(p3); 
                document.querySelector("#goenemy3").disabled = true;
                break;
            case "gop4": 
                loadSelf(p4); 
                document.querySelector("#goenemy4").disabled = true;
                break;
            default: alert("something wrong player")
        }
    });
    //click listener for the enemy select screen
    $(".btn-enemySelect").click(function(event) {
        //hide the enemy select screen and bring up the game area
        document.querySelector("#enemySelect").style.display = "none";
        document.querySelector("#gameArea").style.display = "block";
        //update the screen in the game area
        $("#me").text(event.target.value);
        //set active enemy and disable that character from being chosen again
        switch (event.target.id){
            case "goenemy1": 
                loadEnemy(p1); 
                document.querySelector("#goenemy1").disabled = true;
                break;
            case "goenemy2":    
                loadEnemy(p2); 
                document.querySelector("#goenemy2").disabled = true;
                break;
            case "goenemy3": 
                loadEnemy(p3); 
                document.querySelector("#goenemy3").disabled = true;
                break;
            case "goenemy4": 
                loadEnemy(p4); 
                document.querySelector("#goenemy4").disabled = true;
                break;
            default: alert("something wrong enemy");
        }
    });
    //function to play out the battle
    $("#attack").click(function() {
        //player attacks first; battle ends if opp. defeated.
        opponent.hp -= player.atk;
        $("#enemyHP").text(opponent.hp);
        if (opponent.hp < 1) {youWin();}
        else {
            //otherwise, opp. attacks back; battle ends if player defeated. 
            player.hp -= opponent.atk;
            $("#yourHP").text(player.hp);
            if (player.hp < 1) {gameOver();}
            //if the battle continues, player's attack power increases.
            else {
                player.atk += player.baseAtk;
                $("#yourAtk").text(player.atk);
            }
        }
    });
})();