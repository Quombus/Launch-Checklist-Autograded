// Write your helper functions here!

require("cross-fetch/polyfill");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  document.innerHTML = `<h2>Mission Destination</h2>
               <ol>
                   <li>Name: ${name}</li>
                   <li>Diameter: ${diameter}</li>
                   <li>Star: ${star}</li>
                   <li>Distance from Earth: ${distance}</li>
                   <li>Number of Moons: ${moons}</li>
               </ol>
               <img src=${imageUrl}>`;
}

function validateInput(testInput) {
  if (testInput === "" || testInput === null) {
    return "Empty";
  } else if (isNaN(Number(testInput))) {
    return "Not a Number";
  } else if (!isNaN(Number(testInput))) {
    return "Is a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let noEmptyFields = true;
  let areNumbers = true;
  let pilotValueValidate = validateInput(pilot.value);
  let copilotValueValidate = validateInput(copilot.value);
  let fuelLevelValidate = validateInput(fuelLevel.value);
  let cargoMassValidate = validateInput(cargoLevel.value);
  valueArray = [
    pilotValueValidate,
    copilotValueValidate,
    fuelLevelValidate,
    cargoMassValidate,
  ];
  //validates whether or not any of the inputs are empty, or if th ecargolevel and fuellevel are numbers.
  if (valueArray.includes("Empty")) {
    // alert("All fields are required");
    noEmptyFields = false;
  }
  if (
    fuelLevelValidate == "Not a Number" ||
    cargoMassValidate == "Not a Number"
  ) {
    areNumbers = false;
    // alert("Fuel Level and Cargo Mass Only Accept Numbers");
  }
  // sets the list to visible.
  if (noEmptyFields == true && areNumbers == true) {
    list.style.visibility = "visible";
  }

  //sets the names of the pilot and copilit within the list
  if (pilotValueValidate != "Empty") {
    pilotStatus.innerHTML = `${pilot.value} is ready for launch`;
  }

  if (copilotValueValidate != "Empty") {
    copilotStatus.innerHTML = `${copilot.value} is ready for launch`;
  }
  //checks the value of fuelLevel
  if (fuelLevel.value < 10000) {
    document.innerHTML = "Shuttle Not Ready for Launch";
    document.style.color = "red";
    fuelStatus.innerHTML = "Fuel level too low for launch";
  } else {
    fuelStatus.innerHTML = "Fuel level high enough for launch";
  }

  //checks the value of cargoMass
  if (cargoLevel.value > 10000) {
    document.innerHTML = "Shuttle Not Ready for Launch";
    document.style.color = "red";
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
  } else {
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
  }
  //checks if fuel and cargo levels are acceptable
  if (
    cargoStatus.innerHTML === "Cargo mass low enough for launch" &&
    fuelStatus.innerHTML === "Fuel level high enough for launch"
  ) {
    document.innerHTML = "Shuttle Ready for Launch";
    document.style.color = "green";
  }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {
    return response.json();
  });

  return planetsReturned;
}

function pickPlanet(planets) {
  return planets[Math.floor(Math.random() * planets.length)];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
