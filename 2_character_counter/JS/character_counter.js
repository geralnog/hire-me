function countChars(obj) {
  var val = document.getElementById("counter").value;
  var withSpace = val.length;
  var withOutSpace = val.replace(/\s+/g, '').length;
  var wordsCount = val.match(/\S+/g).length;

  document.getElementById("wordCount").innerHTML = wordsCount + ' words';
  document.getElementById("charNumWithSpace").innerHTML = 'With space: ' + withSpace + '     characters';
  document.getElementById("charNumWithOutSpace").innerHTML = 'Without space: ' + withOutSpace + '     characters';
}