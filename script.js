

var hexInput = document.getElementById("hex");
var inputColor = document.getElementById("input_color");

hexInput.addEventListener('keyup', () => {
  const hex = hexInput.value;
  if(!checkHex(hex)) return;

  const strippedHex = hex.replace('#','');
  inputColor.style.backgroundColor = '#' + strippedHex;
} )

//check to see if hex color input is valid 
const checkHex = (hex) => {
  if(!hex) return false;

  const strippedHex = hex.replace('#', '');
  return strippedHex.length === 3 || strippedHex.length === 6;
}


    

 
