

var hexInput = document.getElementById("hex");
var inputColor = document.getElementById("input_color");

hexInput.addEventListener('keyup', () => {
  const hex = hexInput.value;
  if(!checkHex(hex)) return;

  const strippedHex = hex.replace('#', '');
  inputColor.style.backgroundColor = '#' + strippedHex;
} )

//check to see if hex color input is valid:
const checkHex = (hex) => {
  if(!hex) return false;

  const strippedHex = hex.replace('#', '');
  return strippedHex.length === 3 || strippedHex.length === 6;
}
// convert Hex to RGB:
const convertHextoRGB = (hex) => {
  //check if valid hex, if not return null
  if(!checkHex(hex)) return null;
  //Strip # of the hex:
  let strippedHex = hex.replace('#','');
  // if hex is 3 long, update strippedHex so that 123 becomes 112233
   if (strippedHex.length === 3){
     strippedHex = strippedHex[0] + strippedHex[0]
      + strippedHex[1] + strippedHex[1]
      + strippedHex[2] + strippedHex[2];
   }
   
  const r  = parseInt(strippedHex.substring(0,2), 16);
  const g  = parseInt(strippedHex.substring(2,4), 16);
  const b  = parseInt(strippedHex.substring(4,6), 16);
  
  return {r,g,b}
  
}
// console.log(convertHextoRGB("000"));
// convertHextoRGB("123");


    

 
