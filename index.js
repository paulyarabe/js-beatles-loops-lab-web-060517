function theBeatlesPlay(musicians, instruments){
  var phrases = [];
  for(let i = 0; i < musicians.length; i++)
  {
    phrases.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return phrases
}

function johnLennonFacts(array){
  let i = 0;
  var new_array = [];
  while (i < array.length)
  {
    new_array.push(array[i] + "!!!");
    i++
  }
  return new_array
}

function iLoveTheBeatles(num){
  var array = [];
  var i = 0;
  if (num > 14){
    return ["I love the Beatles!"]
  }
  do {
    array.push("I love the Beatles!")
    i++;
  } while (i<=num)
  return array
}
