var $optionOne = $(".optionOne");
var $optionTwo = $(".optionTwo");
var $optionThree = $(".optionThree");
var optionFour = $(".optionFour");
var $playBtn = $(".playBtn");
var $score = $('.score');
var $timer = $('.timer');
var $question = $('#question');
var $firstBtn = $('.first-btn');
var $secondBtn = $('.second-btn');
var $thirdBtn = $('.third-btn');
var $fourthBtn = $('.fourth-btn');
var score = 0;



var game = {
    triviaQuestions: {
        "spongeBob": {
            q: "SpongeBob SquarePants works at which fast food establishment?",
            image: "assets/images/spongebob.jpg",
            o: ["The Chum Bucket", "The Krusty Krab", "The Fast-food Coliseum", "The Goofy Goobers Icecream Party Boat"],
            a: "The Krusty Krab"
        },
        "family guy": {
            q: "Who is Meg's real father?",
            image: "assets/images/familyguy.jpg",
            o: ["Peter Griffin", "Glenn Quagmire", "Stan Thompson", "Brian Griffin"],
            a: "Stan Thompson"
        },
        "simpsons": {
            q: "What is the name of Bart's favorite comic book action hero?",
            image: "assets/images/simpsons.jpg",
            o: ["Radiation Dude", "Mezmorino", "Radioactive Man", "The Annihilator"],
            a: "Radioactive Man"
        },
        "clevlend show": {
            q: "What does Cleveland do for a living?",
            image: "assets/images/cleveland.gif",
            o: ["Plumber", "Electrician", "Cable Install Man", "Mechanic"],
            a: "Cable Install Man"
        },
        "fairly odd parents": {
            q: "Who has a crush on Timmy Turner?",
            image: "assets/images/fairyodd.jpg",
            o: ["Trixie", "Cutie", "Tootie", "Josie"],
            a: "Tootie"
        },
        "rick and morty": {
            q: "What does Rick use to travel between dimensions and universes?",
            image: "assets/images/rickmorty.jpg",
            o: ["Space Laser", "Portal Gun", "Tardis", 'Universe Key'],
            a: "Portal Gun"
        },
        "big mouth": {
            q: "Which character does 'Nick Kroll' not cover the voice over for?",
            image: "assets/images/bigmouth.gif",
            o: ["Nick", "Hormone Monster", "Lola", "Grandpa Andrew"],
            a: "Grandpa Andrew"
        },
        "samurai jack": {
            q: "When was Samurai Jack Aired?",
            image: "assets/images/samuraijack.jpg",
            o: ["2004", "2001", "1998", "2000"],
            a: "2001"
        },
        "south park": {
            q: "What was the first episode of 'South Park'?",
            image: "assets/images/southpark.jpeg",
            o: ["Volcano", "Tom's Rhinoplasty", "Mr. Hankey, The Christmas Poo", "Cartman Gets an Anal Probe"],
            a: "Cartman Gets an Anal Probe"
        },
        "beavis and butthead": {
            q: "Where does Butt-head say he wants to live closer too?",
            image: "assets/images/beavisandbutthead.gif",
            o: ["Bar", "Theme Park", "Airport", "Highway"],
            a: "Highway"
        },
        "dexter lab": {
            q: "What is the main secret entrance to Dextar's lab?",
            image: "assets/images/dexterlab.jpg",
            o: ["Inside the Computer", "Through the Bookshelf", "Under the Rug", "Through the Closet"],
            a: "Through the Bookshelf"
        },
    },

    renderQuestion: function () {
        if (i <= (this.triviaQuestions.length - 1)) {
            for (var i = 0; i < this.triviaQuestions.length; i++) {
                var $questionDiv = $("<div>");
                var question = this.triviaQuestions[i].q;
                $questionDiv.append(question);
                $(".question-view").append($questionDiv);
                console.log(this.triviaQuestions[i]);
            }
            this.renderButton();
        }
    },

    //render button with answer options
    renderButton: function () {
        var options = this.triviaQuestions[i].o;
        for (var i = 0; i < triviaQuestions.options.length; i++) {
            var $button = $("<button>");
            var option = options[i];
            $button.addClass("btn btn-info btn-lg");
            $button.attr("data-value",)
            $button.text(option);
            $("<options-view>").append($button);
        }

    },

    setUp: function () {
        this.renderQuestion();
   
        
    },
  

    //update score
    updateScore: function () {
        score ++;
        $score.html(score);
    },
    // see if the question is correct
    checkCorrect: function () {

        this.checkWinner();
    },
    // if you win the game
    checkWinner: function () {}


}


//playing the actual game
$(document).ready(function () {

    //game click handlers
    $firstBtn.on('click', function () {
        checkCorrect();
        renderQuestion();
        updateScore();

    });

    $secondBtn.on('click', function () {
        checkCorrect();
        renderQuestion();
        updateScore();
    });

    $thirdBtn.on('click', function () {
        checkCorrect();
        renderQuestion();
        updateScore();
    });
    $fourthBtn.on('click', function () {
        checkCorrect();
        renderQuestion();
        updateScore();
    });

    $playBtn.on('click', function () {
        game.setUp();
        game.updateScore();
    });

});