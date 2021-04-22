
const hexInput = document.getElementById("hex");
const inputColor = document.getElementById("input_color");
const alteredColor = document.getElementById("altered_color");
const alteredColorText = document.getElementById("alteredColorText");
//Control percentage on slider
const slider = document.getElementById('percentage');
const percentageText = document.getElementById('percentage_text');
const lightenText = document.getElementById('lighten_text');
const darkenText = document.getElementById('darken_text');
const toggleBtn = document.getElementById('toggleBtn');

// Toggle button action:
toggleBtn.addEventListener('click', () => {
  if(toggleBtn.classList.contains('toggled')){
    toggleBtn.classList.remove('toggled');
    lightenText.classList.remove('unselected');
    darkenText.classList.add('unselected');
  }else{
    toggleBtn.classList.add('toggled');
    lightenText.classList.add('unselected');
    darkenText.classList.remove('unselected');
  }
  reset();
})

hexInput.addEventListener('keyup', () => {
  const hex = hexInput.value;
  if(!checkHex(hex)) return;

  const strippedHex = hex.replace('#', '');
  inputColor.style.backgroundColor = '#' + strippedHex;
  reset();
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
// Convert RGB back to Hex:
const convertRGBToHex = (r, g, b) => {

  let stringR = ('0' + r.toString(16)).slice(-2);
  let stringG = ('0' + g.toString(16)).slice(-2);
  let stringB = ('0' + b.toString(16)).slice(-2);

  let stringHex = '#' + stringR + stringG + stringB;

  return stringHex;
}

// Make color a percentage lighter or darker
const alterColor = (hex, percentage) => {
  
  //Convert hex value to rgb:
  const {r,g,b} = convertHextoRGB(hex);
    
  //increase each r, g , b by percentage:
    const amount = Math.floor((percentage/100) *255);  
    const perR = increaseRange(r,amount);
    const perG = increaseRange(g,amount);
    const perB = increaseRange(b,amount);
    
    //convert r,g,b to hex:
    return convertRGBToHex(perR, perG, perB);     
}
//Keep rgb between 0 and 255:
const increaseRange = (hex, amount) => {
  const newHex = hex + amount;
  if(newHex > 255){
    return 255;
  }else if(newHex< 0){
    return 0;
  }
  else {
    return newHex;
  }
}

slider.addEventListener('input', () => {
  
  //check if hex is valid:
  if(!checkHex(hexInput.value)) return;
  
  //Change percentage number above slider:
  percentageText.textContent = slider.value + '%';
  
  const valueAddition = 
    toggleBtn.classList.contains('toggled') ? -slider.value : slider.value;
  //Get altered hex value: 
  const alteredHex = alterColor(hexInput.value, valueAddition);
  
  //update Altered Color box:
  alteredColor.style.backgroundColor = alteredHex;
  alteredColorText.innerText = "Altered Color " + alteredHex;
})

const reset = () => {
  
    //set slider value to 0: 
    slider.value = 0;
    //slider text 0%:
    percentageText.innerText = "0%";
    // alteredColor to original input color
    alteredColor.style.backgroundColor= hexInput.value;
    //reset alteredColorText to original input 
    alteredColorText.innerText = "Altered Color " + hexInput.value;

  

}






    

 
