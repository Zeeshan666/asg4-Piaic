
function count(str, letter) 
{
 var letter_Count = 0;
 for (var i = 0; i < str.length; i++) 
 {
    if (str.charAt(i) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}


var  str ="The quick brown fox jumps over the lazy dog";
var src =prompt("search string")
console.log(count(str,src));