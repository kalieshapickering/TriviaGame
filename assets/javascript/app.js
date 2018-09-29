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
var questionNumber = 0;



var game = {
    triviaQuestions: [
       {
            q: "SpongeBob SquarePants works at which fast food establishment?",
            image: "assets/images/spongebob.jpg",
            o: ["The Chum Bucket", "The Krusty Krab", "The Fast-food Coliseum", "The Goofy Goobers Icecream Party Boat"],
            a: "The Krusty Krab"
        },
        {
            q: "Who is Meg's real father?",
            image: "assets/images/familyguy.jpg",
            o: ["Peter Griffin", "Glenn Quagmire", "Stan Thompson", "Brian Griffin"],
            a: "Stan Thompson"
        },
        {
            q: "What is the name of Bart's favorite comic book action hero?",
            image: "assets/images/simpsons.jpg",
            o: ["Radiation Dude", "Mezmorino", "Radioactive Man", "The Annihilator"],
            a: "Radioactive Man"
        },
        {
            q: "What does Cleveland do for a living?",
            image: "assets/images/cleveland.gif",
            o: ["Plumber", "Electrician", "Cable Install Man", "Mechanic"],
            a: "Cable Install Man"
        },
        {
            q: "Who has a crush on Timmy Turner?",
            image: "assets/images/fairyodd.jpg",
            o: ["Trixie", "Cutie", "Tootie", "Josie"],
            a: "Tootie"
        },
         {
            q: "What does Rick use to travel between dimensions and universes?",
            image: "assets/images/rickmorty.jpg",
            o: ["Space Laser", "Portal Gun", "Tardis", 'Universe Key'],
            a: "Portal Gun"
        },
        {
            q: "Which character does 'Nick Kroll' not cover the voice over for?",
            image: "assets/images/bigmouth.gif",
            o: ["Nick", "Hormone Monster", "Lola", "Grandpa Andrew"],
            a: "Grandpa Andrew"
        },
       {
            q: "When was Samurai Jack Aired?",
            image: "assets/images/samuraijack.jpg",
            o: ["2004", "2001", "1998", "2000"],
            a: "2001"
        },
        {
            q: "What was the first episode of 'South Park'?",
            image: "assets/images/southpark.jpeg",
            o: ["Volcano", "Tom's Rhinoplasty", "Mr. Hankey, The Christmas Poo", "Cartman Gets an Anal Probe"],
            a: "Cartman Gets an Anal Probe"
        },
         {
            q: "Where does Butt-head say he wants to live closer too?",
            image: "assets/images/beavisandbutthead.gif",
            o: ["Bar", "Theme Park", "Airport", "Highway"],
            a: "Highway"
        },
         {
            q: "What is the main secret entrance to Dextar's lab?",
            image: "assets/images/dexterlab.jpg",
            o: ["Inside the Computer", "Through the Bookshelf", "Under the Rug", "Through the Closet"],
            a: "Through the Bookshelf"
        },
    ],
loadQuestion: function(){
for (var i=0; i<this.triviaQuestions[question].length; i++){

}
},
     renderQuestion: function () {
    $('.question-view').empty();
    $('.display-view').empty();
               var $questionDiv = $("<div>");
               var $pictureDiv = $("<div>");
               var question = this.triviaQuestions[questionNumber].q;
               var picture = this.triviaQuestions[questionNumber].image;
                $questionDiv.append(question);
                $pictureDiv.append("<img src=" + picture + "/>");
                $(".question-view").append($questionDiv);
                $(".display-view").append($pictureDiv);
                console.log(this.triviaQuestions[questionNumber].q);
           //  }
            this.renderButton();
       // }
    },

    //render button with answer options
    renderButton: function () {
        $(".options-view").empty();
        var options = this.triviaQuestions[questionNumber].o;
        for (var i = 0; i < this.triviaQuestions[questionNumber].o.length; i++) {
            var $button = $("<button>");
            var option = options[i];
            $button.addClass("btn btn-info btn-lg answer");
            $button.data("value",option)
            $button.text(option);
            $(".options-view").append($button);
        }

    },

    setUp: function () {
        this.renderQuestion();
        $playBtn.hide();
        
    },
  

    //update score
    updateScore: function () {
        score ++;
        $score.html(score);
    },
    // see if the question is correct
    checkCorrect: function (data) {
 if(data == this.triviaQuestions[questionNumber].a){
     this.updateScore();
     console.log("This works");
 }
        else{
       console.log("WRONG");
        } 
      // this.checkWinner();
      questionNumber ++;
       this.renderQuestion();
    },
    // if you win the game
    checkWinner: function () {}


}


//playing the actual game
$(document).ready(function () {

    //game click handlers
    $(document).on('click',".answer", function () {
        var data = $(this).data("value")

        game.checkCorrect(data);
    });


    $playBtn.on('click', function(){
        game.setUp();
    });
    
});