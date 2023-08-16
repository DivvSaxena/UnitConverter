/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let numEl = document.getElementById("numinput")
let lengthEl = document.getElementById("conversionone")
let volumeEl = document.getElementById("conversiontwo")
let massEl = document.getElementById("conversionthree")

// function convertLength(){
//   let meterTofeet = numEl.value * 3.281
//   let feetTometer = numEl.value * 0.3048
// }
function meterTofeet(){
  return (numEl.value * 3.281).toFixed(3) 
}
function feetTometer(){
  return (numEl.value * 0.3048).toFixed(3) 
}
// function convertVolume(){
//   let literTogallons = numEl.value * 0.264
//   let gallonsToliter = numEl.value * 3.78541
// }
function literTogallons(){
  return (numEl.value * 0.264).toFixed(3) 
}
function gallonsToliter(){
  return (numEl.value * 3.78541).toFixed(3) 
}
// function convertMass(){
//   let kiloToPound = numEl.value * 2.204 
//   let poundToKilos = numEl.value * 0.453592
// }
function kiloToPound(){
  return (numEl.value * 2.204).toFixed(3) 
}
function poundToKilos(){
  return (numEl.value * 0.453592).toFixed(3)
}

function clickit(){
  lengthEl.textContent = `${numEl.value} meters = ${meterTofeet()} feet | ${numEl.value} feet = ${feetTometer()} meters`
  volumeEl.textContent = `${numEl.value} liters = ${literTogallons()} gallons | ${numEl.value} gallons = ${gallonsToliter()} liters`
  massEl.textContent = `${numEl.value} kilos = ${kiloToPound()} pounds | ${numEl.value} pounds = ${poundToKilos()} kilos`
}