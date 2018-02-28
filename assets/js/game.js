(function(){
    //character data
    var p1 = {
        name: "libya",   
        hp: 100,
        atk: 5,
        ctrAtk: 10,
        atkfx: 1000,
        dftfx: 5932,
        vicfx: 3381
    };
    var p2 = {
        name: "japan",
        hp: 200,
        atk: 2,
        ctrAtk: 4,
        atkfx: 1288,
        dftfx: 2496,
        vicfx: 2414
    };
    var p3 = {
        name: "canada",
        hp: 400,
        atk: 1,
        ctrAtk: 6,
        atkfx: 1165,
        dftfx: 4005,
        vicfx: 2472
    };
    var p4 = {
        name: "poland",
        hp: 75,
        atk: 8,
        ctrAtk: 50,
        atkfx: 2318,
        dftfx: 6675,
        vicfx: 1381
    };
    //active player
    var player = {
        name: "",
        hp: 0,
        maxHp: 0,
        atk: 0,
        baseAtk: 0,
        atkfx: 0,
        dftfx: 0,
        vicfx: 0
    };
    //active opponent
    var opponent = {
        name: "",
        hp:0,
        maxHp: 0,
        atk: 0,
        atkfx: 0,
        dftfx: 0,
        vicfx: 0
    };
    var sfx = document.querySelector("#gameSounds");
    var distance = $("#battlefield").width();
    //function to choose active player
    function loadSelf(object) {
        //active player stats set to the chosen character's stats
        player.name = object.name;
        player.pic = object.pic;
        player.hp = object.hp;
        player.maxHp = object.hp;
        player.atk = object.atk;
        player.baseAtk = object.atk;
        player.atkfx = object.atkfx;
        player.dftfx = object.dftfx;
        player.vicfx = object.vicfx;
        //update the screen
        document.querySelector("#yourHP").style.color = "black";
        $("#playerWeapon").html("<img src = assets/images/" + player.name + "_weapon.png class = weaponPic>")
        $("#yourHP").text(player.hp);
        $("#yourAtk").text(player.atk);
        sfx.src = "assets/sounds/" + object.name + "_select.ogg";
        sfx.play();
    }
    //function to choose active opponent
    function loadEnemy(object) {
        //active opponent stats set to chosen character's stats
        opponent.name = object.name;
        opponent.pic = object.pic;
        opponent.hp = object.hp;
        opponent.maxHp = object.hp;
        opponent.atk = object.ctrAtk;
        opponent.atkfx = object.atkfx;
        opponent.dftfx = object.dftfx;
        opponent.vicfx = object.vicfx;
        //update the screen
        document.querySelector("#enemyHP").style.color = "black";
        $("#opponentWeapon").html("<img src = assets/images/" + opponent.name + "_weapon.png class = weaponPic>")
        $("#enemyHP").text(opponent.hp);
        $("#enemyAtk").text(opponent.atk);
        document.querySelector("#attack").disabled = false;
        sfx.src = "assets/sounds/" + object.name + "_select.ogg";
        sfx.play();
    }
    //win a round function
    function youWin() {
        //if all enemies are defeated, alert victory and reset the game
        if (
            document.querySelector("#goenemy1").disabled &&
            document.querySelector("#goenemy2").disabled &&
            document.querySelector("#goenemy3").disabled &&
            document.querySelector("#goenemy4").disabled
        ) {victory();}
        else {
        //otherwise, return to choose the next enemy
        $("#you").html("<img src = assets/images/" + player.name + "_victory.jpg class = playerPic>");
        sfx.src = "assets/sounds/" + player.name + "_victory.ogg";
        sfx.play();
        setTimeout(iLose, player.vicfx);
        }  
        function iLose() {
            $("#me").html("<img src = assets/images/" + opponent.name + "_defeat.jpg class = playerPic>");
            sfx.src = "assets/sounds/" + opponent.name + "_defeat.ogg";
            sfx.play();
            setTimeout(goAgain, opponent.dftfx);
        function goAgain() {
            $("#you").html("<img src = assets/images/" + player.name + "_faceright.jpg class = playerPic>");
            document.querySelector("#enemySelect").style.display = "block";
        }
    }
    }
    //win the game function
    function victory() {
        sfx.src = "assets/sounds/game_victory.ogg";
        sfx.play();
        document.querySelector("#gameArea").style.display = "none";
        document.querySelector("#victoryScreen").style.display = "block";
        document.querySelector("#start").style.display = "block";
        document.querySelector("#goenemy1").disabled = false;
        document.querySelector("#goenemy2").disabled = false;
        document.querySelector("#goenemy3").disabled = false;
        document.querySelector("#goenemy4").disabled = false;
        document.querySelector("#goenemy1").style.display = "block";
        document.querySelector("#goenemy2").style.display = "block";
        document.querySelector("#goenemy3").style.display = "block";
        document.querySelector("#goenemy4").style.display = "block";
        $("#me").html("");
        $("#you").html('');
        $("#yourHP").text("");
        $("#yourAtk").text("");
        $("#enemyHP").text("");
        $("#enemyAtk").text("");
    }
    //game over function. Alert defeat and reset the game
    function gameOver() {
        sfx.src = "assets/sounds/game_over.ogg";
        sfx.play();
        document.querySelector("#gameArea").style.display = "none";
        document.querySelector("#gameOverScreen").style.display = "block";
        document.querySelector("#start").style.display = "block";
        document.querySelector("#goenemy1").disabled = false;
        document.querySelector("#goenemy2").disabled = false;
        document.querySelector("#goenemy3").disabled = false;
        document.querySelector("#goenemy4").disabled = false;
        document.querySelector("#goenemy1").style.display = "block";
        document.querySelector("#goenemy2").style.display = "block";
        document.querySelector("#goenemy3").style.display = "block";
        document.querySelector("#goenemy4").style.display = "block";
        $("#me").html("");
        $("#you").html('');
        $("#yourHP").text("");
        $("#yourAtk").text("");
        $("#enemyHP").text("");
        $("#enemyAtk").text("");
    }
    //click listener for intro screen
    $("#start").click(function(){
        document.querySelector("#playerSelect").style.display = "block";
        document.querySelector("#gameArea").style.display = "block";
        document.querySelector("#start").style.display = "none";
        document.querySelector("#victoryScreen").style.display = "none";
        document.querySelector("#gameOverScreen").style.display = "none";
    });
    //click listener for player select screen
    $(".btn-playerSelect").click(function(event) {
        //hide the player select screen and bring up the enemy select screen
        document.querySelector("#playerSelect").style.display = "none";
        document.querySelector("#enemySelect").style.display = "block";
        //set active player and disable enemy selection from choosing the same character
        switch (event.currentTarget.id){
            case "gop1": 
                loadSelf(p1); 
                document.querySelector("#goenemy1").disabled = true;
                document.querySelector("#goenemy1").style.display = "none";
                break;
            case "gop2": 
                loadSelf(p2); 
                document.querySelector("#goenemy2").disabled = true;
                document.querySelector("#goenemy2").style.display = "none";
                break;
            case "gop3": 
                loadSelf(p3); 
                document.querySelector("#goenemy3").disabled = true;
                document.querySelector("#goenemy3").style.display = "none";
                break;
            case "gop4": 
                loadSelf(p4); 
                document.querySelector("#goenemy4").disabled = true;
                document.querySelector("#goenemy4").style.display = "none";
                break;
            default: alert("something wrong player")
        }
        //update the screen in the game area
        $("#you").html('<img src =assets/images/' + player.name +  '_faceright.jpg alt = ' + player.name + ' class = playerPic>');
    });
    //click listener for the enemy select screen
    $(".btn-enemySelect").click(function(event) {
        //hide the enemy select screen and bring up the game area
        document.querySelector("#enemySelect").style.display = "none";
        //set active enemy and disable that character from being chosen again
        switch (event.currentTarget.id){
            case "goenemy1": 
                loadEnemy(p1); 
                document.querySelector("#goenemy1").disabled = true;
                document.querySelector("#goenemy1").style.display = "none";
                break;
            case "goenemy2":    
                loadEnemy(p2); 
                document.querySelector("#goenemy2").disabled = true;
                document.querySelector("#goenemy2").style.display = "none";
                break;
            case "goenemy3": 
                loadEnemy(p3); 
                document.querySelector("#goenemy3").disabled = true;
                document.querySelector("#goenemy3").style.display = "none";
                break;
            case "goenemy4": 
                loadEnemy(p4); 
                document.querySelector("#goenemy4").disabled = true;
                document.querySelector("#goenemy4").style.display = "none";
                break;
            default: alert("something wrong enemy");
        }
        //update the screen in the game area
        $("#me").html('<img src = assets/images/'  + opponent.name + '_faceleft.jpg alt = ' + opponent.name + ' class = playerPic>');
    });
    //function to play out the battle
    $("#attack").click(function() {
        //player attacks first; battle ends if opp. defeated.
        document.querySelector("#attack").disabled = true;
        //attack sound
        sfx.src = "assets/sounds/" + player.name + "_attack.ogg";
        sfx.play();
        //attack animation
        distance = ($("#battlefield").width() - $("#me").width());
        document.querySelector("#playerWeapon").style.visibility = "visible";
        $("#playerWeapon").animate({left: distance},800,function(){
            document.querySelector("#playerWeapon").style.visibility = "hidden";
            $("#playerWeapon").animate({left: "50px"},1);
        });
        //document.querySelector("#playerWeapon").style.visibility = "hidden";

        //attack result
        opponent.hp -= player.atk;
        if (opponent.hp < (opponent.maxHp / 2)) {document.querySelector("#enemyHP").style.color = "yellow";}
        if (opponent.hp < (opponent.maxHp / 4)) {document.querySelector("#enemyHP").style.color = "red";}
        if (opponent.hp < 0){$("#enemyHP").text("0");}
        else {$("#enemyHP").text(opponent.hp);}
        setTimeout(counterAttack, player.atkfx);
        function counterAttack() {
        if (opponent.hp < 1) {youWin();}
        else {
            //otherwise, opp. attacks back; battle ends if player defeated. 
            //attack sound
            sfx.src = "assets/sounds/" + opponent.name + "_attack.ogg";
            sfx.play();
            //attack animation
            distance = ($("#battlefield").width() - $("#you").width());
            document.querySelector("#opponentWeapon").style.visibility = "visible";
            $("#opponentWeapon").animate({right: distance},800,function(){
                document.querySelector("#opponentWeapon").style.visibility = "hidden";
                $("#opponentWeapon").animate({right: "50px"},1);
            });
            //attack result
            player.hp -= opponent.atk;
            if (player.hp < (player.maxHp / 2)) {document.querySelector("#yourHP").style.color = "yellow";}
            if (player.hp < (player.maxHp / 4)) {document.querySelector("#yourHP").style.color = "red";}
            if (player.hp <0){$("#yourHP").text("0");}
            else {$("#yourHP").text(player.hp);}
            setTimeout(checkVictory, opponent.atkfx);
        function checkVictory() {
            if (player.hp < 1) {gameOver();}
            //if the battle continues, player's attack power increases.
            else {
                player.atk += player.baseAtk;
                $("#yourAtk").text(player.atk);
                document.querySelector("#attack").disabled = false;
            }
        }
        }
        }
    });
})();