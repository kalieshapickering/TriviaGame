var $optionOne = $(".optionOne");
var $optionTwo = $(".optionTwo");
var $optionThree = $(".optionThree");
var optionFour = $(".optionFour");
var $playBtn = $(".playBtn");
var $score = $('.score');
var $question = $('#question');
var $firstBtn = $('.first-btn');
var $secondBtn = $('.second-btn');
var $thirdBtn = $('.third-btn');
var $fourthBtn = $('.fourth-btn');

var game = {
    score = 0,
    triviaQuestionsIndex = 0,

triviaQuestions:{
    "q1":{
        q: "hi",
        w1: "",
        w2: "",
        w3: "",
        a: ""
    },
    "q2":{
        q: "",
        w1: "",
        w2: "",
        w3: "",
        a: ""
    },
    "q3":{
        q: "",
        w1: "",
        w2: "",
        w3: "",
        a: ""
    },
    "q4":{
        q: "",
        w1: "",
        w2: "",
        w3: "",
        a: ""
    },
    "q5":{
        q: "",
        w1: "",
        w2: "",
        w3: "",
        a: ""
    },

    renderQuestion : function(){
if (triviaQuestionsIndex <= (triviaQuestions.length -1)){
    $question.hmtl(triviaQuestions[triviaQuestionsIndex].q);
}else{
    $question.html("Game over!")
    $score.html(score + " out of " + triviaQuestions.length);
    console.log(triviaQuestions[triviaQuestionsIndex].q);
}
    },
    answerOptions: function(){
        //need to randomize
      $optionOne.hmtl();
       $optionTwo.html();
        $optionThree.html();
        $optionFour.html();
    },
    setUp: function(){
        btn();

    },
    btn: function(){
        $firstBtn.addClass('btn btn-info btn-sm');
        $firstBtn.html(optionOne);
        $("#first-btn").append($firstBtn);
        $secondBtn.addClass('btn btn-info btn-sm');
        $secondBtn.html(optionTwo);
        $("#second-btn").append($secondBtn);
        $thirdBtn.addClass('btn btn-info btn-sm');
        $thirdBtn.html(optionThree);
        $("#third-btn").append($thirdBtn);
        $fourthBtn.addClass('btn btn-info btn-sm');
        $fourthBtn.html(optionFour);
        $("#fourth-btn").append($fourthBtn);
    },
//update score
    updateScore: function(){
$score.html(score);
    },
// see if the question is correct
    checkCorrect: function(){
        this.checkWinner();
    },
// if you win the game
checkWinner : function(){}

},
}



//playing the actual game
$(document).ready( function(){

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
       SetUp();
       renderQuestion();
       updateScore();
    });

});