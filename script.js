var joke_index = 0;
var jokes = [
    "Knock knock. Who’s there? Cow says. Cow says who? No, a cow says mooooo!",
    "Knock knock. Who’s there? Etch. Etch who? Bless you, friend.",
    "Knock, knock. Who’s there? Canoe. Canoe who? Canoe help me with my homework?",
    "Knock, knock. Who’s there? Orange. Orange who? Orange you going to let me in?",
    "Knock, knock. Who’s there? Anee. Anee,who? Anee one you like!",
    "Knock knock. Who’s there? Spell. Spell who? Okay, okay: W. H. O.",
    "Knock knock. Who’s there? Honey bee. Honey bee who? Honey bee a dear and open up, would you?",
    "Knock knock. Who’s there? Olive. Olive who? Olive you. Do you love me too?"
    
]


$('.btn').click(function() {

  if (joke_index === jokes.length - 1)
    joke_index = 0;
  else
    joke_index++;

  $('.h1').html(jokes[joke_index]);
});