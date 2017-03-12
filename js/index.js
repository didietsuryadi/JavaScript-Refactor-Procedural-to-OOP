var number = {
  getNumber: function(key,die) {
    var value = Math.floor((Math.random()*6)+1)
    var dice = "";
    if(value == 1){
      dice = '<img src="images/dice-1.png">'
    }else if(value == 2){
      dice = '<img src="images/dice-2.png">'
    }else if(value == 3){
      dice = '<img src="images/dice-3.png">'
    }else if(value == 4){
      dice = '<img src="images/dice-4.png">'
    }else if(value == 5){
      dice = '<img src="images/dice-5.png">'
    }else if(value == 6){
      dice = '<img src="images/dice-6.png">'
    }
    $(die).html(dice)
  }
}

var roll = {
  getDice: function() {
    $('.dice').append('<div class="die"><img src="images/dice-0.png"></div>')
  },
  rollDice: function() {
    $('.die').each(number.getNumber)
  }
}

var view = {
  onClick: function() {
    $('#roller button.add').on('click', roll.getDice)
    $('#roller button.roll').on('click', roll.rollDice)
  }
}

$(document).ready(view.onClick)
