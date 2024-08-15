// require("cross-fetch/polyfill");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
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
  if (testInput == "" || testInput == null || testInput == undefined) {
    return "Empty";
  } else if (isNaN(Number(testInput))) {
    return "Not a Number";
  } else if (!isNaN(Number(testInput))) {
    return "Is a Number";
  }
}

// document is "testForm"
// list is "faultyItems"
let documentVariable = document.getElementById("launchForm");
let listVaraible = document.getElementById("faultyItems");
let pilot = document.getElementsByName("pilotName"); //remove after testiing.
let copilot = document.getElementsByName("copilotName");
let fuelLevel = document.getElementsByName("fuelLevel");
let cargoMass = document.getElementsByName("cargoMass");

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let pilotValue = validateInput(pilot);
  let copilotValue = validateInput(copilot);
  let fuelLevelValue = validateInput(fuelLevel);
  let cargoMassValue = validateInput(cargoLevel);

  let valueArray = [pilotValue, copilotValue, fuelLevelValue, cargoMassValue];

  

  window.addEventListener("load", function () {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (valueArray.includes("Empty")) {
        alert("All fields are required");
      }
      if (
        fuelLevelValue == "Not a Number" ||
        cargoLevelValue == "Not a Number"
      ) {
        alert("Fuel Level and Cargo Mass Only Accept Numbers");
      }
    });
  });
}

let formSubmissionVariable = formSubmission(documentVariable, listVaraible, pilot, copilot, fuelLevel, cargoMass);

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch().then(function (response) {});

  return planetsReturned;
}

function pickPlanet(planets) {}

// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet;
// module.exports.myFetch = myFetch;
