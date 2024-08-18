// Write your helper functions here!



require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  // Here is the HTML formatting for our mission target div.
  /*
               <h2>Mission Destination</h2>
               <ol>
                   <li>Name: </li>
                   <li>Diameter: </li>
                   <li>Star: ${star}</li>
                   <li>Distance from Earth: </li>
                   <li>Number of Moons: </li>
               </ol>
               <img src="">
  */
}

function validateInput(testInput) {
  if (testInput === "" || testInput === null || testInput === undefined) {
    return "Empty";
  } else if (isNaN(Number(testInput))) {
    return "Not a Number";
  } else if (!isNaN(Number(testInput))) {
    return "Is a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let pilotValueValidate = validateInput(pilot.value);
  let copilotValueValidate = validateInput(copilot.value);
  let fuelLevelValidate = validateInput(fuelLevel.value);
  let cargoMassValidate = validateInput(cargoLevel.value);
  valueArray = [pilotValueValidate, copilotValueValidate, fuelLevelValidate, cargoMassValidate];

    console.log(valueArray);

    if (valueArray.includes("Empty")) {
      alert("All fields are required");
      e.preventDefault();
    }
    if (
      fuelLevelValidate == "Not a Number" ||
      cargoMassValidate == "Not a Number"
    ) {
      alert("Fuel Level and Cargo Mass Only Accept Numbers");
      e.preventDefault();
    }
  

}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch().then(function (response) {
  });

  return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;