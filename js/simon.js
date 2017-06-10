console.log('simon.js');

function SimonGame () {
  this.colors = ['red','green','blue','yellow'];

  // one current sequence
  this.sequence = [];

  // keep track of where user is in sequence
  this.userClickCount = 0;

  // keep track of what the player's score is
  this.round = 1;
}

SimonGame.prototype.startGame = function () {
  console.log('Starting game... ');
  this.addColor();
  this.showSequence();
};

// chooses one of four colors
SimonGame.prototype.addColor = function () {
  var randomIndex = Math.floor(Math.random() * 4);
  this.sequence.push(this.colors[randomIndex]);
};

SimonGame.prototype.showSequence = function () {
  var ourSequence = this.sequence;
  var i = 0;

  $('#buttons-container').addClass('blocked');

  var intervalId = setInterval(function() {
  if (i >= ourSequence.length) {
    $('#buttons-container').removeClass('blocked');
    clearInterval(intervalId);
    return;
  }

  $('#' + ourSequence[i]).addClass('lightOn');

  setTimeout(function() {
    $('button').removeClass('lightOn');
  }, 700);
  i += 1;
}, 1200);
};


SimonGame.prototype.nextRound = function() {
  this.addColor();
  this.showSequence();
  this.userClickCount = 0;

  $('#counter').html(this.round);
  this.round++;
};

SimonGame.prototype.gameOver = function() {
  this.round = 1;
  this.sequence = [];
  this.userClickCount = 0;
  $('#counter').html(0);
  $('.game-over').fadeIn(300);
  return;
};
