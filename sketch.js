

var a = prompt('Enter the first variable: ');
var b = prompt('enter the second veriable: ');

function setup(){
  var b2 = createButton("click here to Swap");
 b2.mousePressed(swap)

  }


function draw()
{
}
function swap() {
  [a,b] = [b,a]
  console.log("thefirstveriableis" +a)
  console.log("thefirstveriableis" +b)
}