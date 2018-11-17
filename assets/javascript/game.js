$(document).ready(function () {

    /// the variables 

    var numberone = Math.floor(Math.random() * 12) + 1;
    var numbertwo = Math.floor(Math.random() * 12) + 1;
    var numberthree = Math.floor(Math.random() * 12) + 1;
    var numberfour = Math.floor(Math.random() * 12) + 1;
    var finalanswer = 0;
    var wins = 0;
    var losses = 0;

    /// showing the choices in the console log

    console.log("Mushroom number:", numberone);
    console.log("coin number", numbertwo);
    console.log("flower number:", numberthree);
    console.log("star number:", numberfour);
    

    /// generating a target number and displaying the numbers 
    
    var targetnumber = Math.floor(Math.random() * 101) + 19;
    console.log("Number to guess:", targetnumber);

    $("#first-number").text(targetnumber);
    $("#total-score-number").text(finalanswer);
    $("#wincounter").text(wins);
    $("#losscounter").text(losses);

    // When the user clicks on the mushroom the value is added to the running total. 

    $("#mushroom").on("click", function () {
        // var finalanswer = finalanswer + numberone;
        finalanswer += numberone;
        console.log(finalanswer);
        $("#total-score-number").text(finalanswer);

        // win condition + reset the counters

        if (finalanswer == targetnumber) {
            alert("You win");
            targetnumber = Math.floor(Math.random() * 101) + 19;
            finalanswer = 0;
            wins ++;
            numberone = Math.floor(Math.random() * 12) + 1;
            numbertwo = Math.floor(Math.random() * 12) + 1;
            numberthree = Math.floor(Math.random() * 12) + 1;
            numberfour = Math.floor(Math.random() * 12) + 1;
            console.log("Mushroom number:", numberone);
            console.log("coin number", numbertwo);
            console.log("flower number:", numberthree);
            console.log("star number:", numberfour);
            console.log(targetnumber);
            console.log(finalanswer);
            $("#first-number").text(targetnumber);
            $("#total-score-number").text(finalanswer);
            $("#wincounter").text(wins);
            $("#winpic").css('visibility','visible');
            $("#losspic").css('visibility','hidden');
            
        }

        // loss conditions + reset on loss

        if (finalanswer >= targetnumber) {
            alert("you lose");
            targetnumber = Math.floor(Math.random() * 101) + 19;
            finalanswer = 0;
            losses ++;
            numberone = Math.floor(Math.random() * 12) + 1;
            numbertwo = Math.floor(Math.random() * 12) + 1;
            numberthree = Math.floor(Math.random() * 12) + 1;
            numberfour = Math.floor(Math.random() * 12) + 1;
            console.log("Mushroom number:", numberone);
            console.log("coin number", numbertwo);
            console.log("flower number:", numberthree);
            console.log("star number:", numberfour);
            console.log(targetnumber);
            console.log(finalanswer);
            $("#first-number").text(targetnumber);
            $("#total-score-number").text(finalanswer);
            $("#losscounter").text(losses);
            $("#winpic").css('visibility','hidden');
            $("#losspic").css('visibility','visible');

        }
    });

    // When the user clicks on the coin the value is added to the running total.

    $("#coin").on("click", function () {
        // var finalanswer = finalanswer + numberone;
        finalanswer += numbertwo;
        console.log(finalanswer);
        $("#total-score-number").text(finalanswer);

        // win condition + reset the counters

        if (finalanswer == targetnumber) {
            alert("You win");
            targetnumber = Math.floor(Math.random() * 101) + 19;
            finalanswer = 0;
            wins ++;
            numberone = Math.floor(Math.random() * 12) + 1;
            numbertwo = Math.floor(Math.random() * 12) + 1;
            numberthree = Math.floor(Math.random() * 12) + 1;
            numberfour = Math.floor(Math.random() * 12) + 1;
            console.log("Mushroom number:", numberone);
            console.log("coin number", numbertwo);
            console.log("flower number:", numberthree);
            console.log("star number:", numberfour);
            console.log(targetnumber);
            console.log(finalanswer);
            $("#first-number").text(targetnumber);
            $("#total-score-number").text(finalanswer);
            $("#wincounter").text(wins);
            $("#winpic").css('visibility','visible');
            $("#losspic").css('visibility','hidden');
        }

        // loss conditions + reset on loss

        if (finalanswer >= targetnumber) {
            alert("you lose");
            targetnumber = Math.floor(Math.random() * 101) + 19;
            finalanswer = 0;
            losses ++;
            numberone = Math.floor(Math.random() * 12) + 1;
            numbertwo = Math.floor(Math.random() * 12) + 1;
            numberthree = Math.floor(Math.random() * 12) + 1;
            numberfour = Math.floor(Math.random() * 12) + 1;
            console.log("Mushroom number:", numberone);
            console.log("coin number", numbertwo);
            console.log("flower number:", numberthree);
            console.log("star number:", numberfour);
            console.log(targetnumber);
            console.log(finalanswer);
            $("#first-number").text(targetnumber);
            $("#total-score-number").text(finalanswer);
            $("#losscounter").text(losses);
            $("#winpic").css('visibility','hidden');
            $("#losspic").css('visibility','visible');

        }

    });

    // When the user clicks on the flower the value is added to the running total.

    $("#flower").on("click", function () {
        // var finalanswer = finalanswer + numberone;
        finalanswer += numberthree;
        console.log(finalanswer);
        $("#total-score-number").text(finalanswer);

        // win condition + reset the counters

        if (finalanswer == targetnumber) {
            alert("You win");
            targetnumber = Math.floor(Math.random() * 101) + 19;
            finalanswer = 0;
            wins ++;
            numberone = Math.floor(Math.random() * 12) + 1;
            numbertwo = Math.floor(Math.random() * 12) + 1;
            numberthree = Math.floor(Math.random() * 12) + 1;
            numberfour = Math.floor(Math.random() * 12) + 1;
            console.log("Mushroom number:", numberone);
            console.log("coin number", numbertwo);
            console.log("flower number:", numberthree);
            console.log("star number:", numberfour);
            console.log(targetnumber);
            console.log(finalanswer);
            $("#first-number").text(targetnumber);
            $("#total-score-number").text(finalanswer);
            $("#wincounter").text(wins);
            $("#winpic").css('visibility','visible');
            $("#losspic").css('visibility','hidden');
        }

        // loss conditions + reset on loss

        if (finalanswer >= targetnumber) {
            alert("you lose");
            targetnumber = Math.floor(Math.random() * 101) + 19;
            finalanswer = 0;
            losses ++;
            numberone = Math.floor(Math.random() * 12) + 1;
            numbertwo = Math.floor(Math.random() * 12) + 1;
            numberthree = Math.floor(Math.random() * 12) + 1;
            numberfour = Math.floor(Math.random() * 12) + 1;
            console.log("Mushroom number:", numberone);
            console.log("coin number", numbertwo);
            console.log("flower number:", numberthree);
            console.log("star number:", numberfour);
            console.log(targetnumber);
            console.log(finalanswer);
            $("#first-number").text(targetnumber);
            $("#total-score-number").text(finalanswer);
            $("#losscounter").text(losses);
            $("#winpic").css('visibility','hidden');
            $("#losspic").css('visibility','visible');

        }

    });

    // When the user clicks on the star the value is added to the running total.

    $("#star").on("click", function () {
        // var finalanswer = finalanswer + numberone;
        finalanswer += numberfour;
        console.log(finalanswer);
        $("#total-score-number").text(finalanswer);

        // win condition + reset the counters

        if (finalanswer == targetnumber) {
            alert("You win");
            targetnumber = Math.floor(Math.random() * 101) + 19;
            finalanswer = 0;
            wins ++;
            numberone = Math.floor(Math.random() * 12) + 1;
            numbertwo = Math.floor(Math.random() * 12) + 1;
            numberthree = Math.floor(Math.random() * 12) + 1;
            numberfour = Math.floor(Math.random() * 12) + 1;
            console.log("Mushroom number:", numberone);
            console.log("coin number", numbertwo);
            console.log("flower number:", numberthree);
            console.log("star number:", numberfour);
            console.log(targetnumber);
            console.log(finalanswer);
            $("#first-number").text(targetnumber);
            $("#total-score-number").text(finalanswer);
            $("#wincounter").text(wins);
            $("#winpic").css('visibility','visible');
            $("#losspic").css('visibility','hidden');

        }

        // loss conditions + reset on loss

        if (finalanswer >= targetnumber) {
            alert("you lose");
            targetnumber = Math.floor(Math.random() * 101) + 19;
            finalanswer = 0;
            losses ++;
            numberone = Math.floor(Math.random() * 12) + 1;
            numbertwo = Math.floor(Math.random() * 12) + 1;
            numberthree = Math.floor(Math.random() * 12) + 1;
            numberfour = Math.floor(Math.random() * 12) + 1;
            console.log("Mushroom number:", numberone);
            console.log("coin number", numbertwo);
            console.log("flower number:", numberthree);
            console.log("star number:", numberfour);
            console.log(targetnumber);
            console.log(finalanswer);
            $("#first-number").text(targetnumber);
            $("#total-score-number").text(finalanswer);
            $("#losscounter").text(losses);
            $("#winpic").css('visibility','hidden');
            $("#losspic").css('visibility','visible');

        }

    });



});

