
function validateInput(testInput) {
  if (testInput == "" || testInput == null || testInput == undefined) {
    return "Empty";
  } else if (isNaN(Number(testInput))) {
    return "Not a Number";
  } else if (!isNaN(Number(testInput))) {
    return "Is a Number";
  }
}

window.addEventListener("load", function () {
  let pilot = this.document.getElementsByName("pilotName")[0];
  let copilot = this.document.getElementsByName("copilotName")[0];
  let fuelLevel = this.document.getElementsByName("fuelLevel")[0];
  let cargoMass = this.document.getElementsByName("cargoMass")[0];
  let form = this.document.getElementById("launchForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Submit Button Pressed");

    console.log(
      pilot.value +
      " " +
      copilot.value +
      " " +
      fuelLevel.value +
      " " +
      cargoMass.value
    );

    function validateInput(testInput) {
      if (testInput === "" || testInput === null || testInput === undefined) {
        return "Empty";
      } else if (isNaN(Number(testInput))) {
        return "Not a Number";
      } else if (!isNaN(Number(testInput))) {
        return "Is a Number";
      }
    }

    let pilotValueValidate = validateInput(pilot.value);
    let copilotValueValidate = validateInput(copilot.value);
    let fuelLevelValidate = validateInput(fuelLevel.value);
    let cargoMassValidate = validateInput(cargoMass.value);
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

    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let h2 = document.getElementById("launchStatus");
    let list = document.getElementById("faultyItems");


    list.style.visibility = "visible";

    if (pilotValueValidate != "Empty") {
      pilotStatus.innerHTML = `${pilot.value} is ready for launch`;
    }

    if (copilotValueValidate != "Empty") {
      copilotStatus.innerHTML = `${copilot.value} is ready for launch`;
    }

    if (fuelLevel.value < 10000) {
      h2.innerHTML = "Shuttle Not Ready for Launch";
      h2.style.color = "red";
      fuelStatus.innerHTML = "Fuel Level is too low for launch";
    } else {
      h2.innerHTML = "Shuttle is Ready for Launch";
      h2.style.color = "green";
      fuelStatus.innerHTML = "Fuel level high enough for launch";
    }

    if (cargoMass.value > 10000) {
      h2.innerHTML = "Shuttle Not Ready for Launch";
      h2.style.color = "red";
      cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    } else {
      h2.innerHTML = "Shuttle is Ready for Launch";
      h2.style.color = "green";
      cargoStatus.innerHTML = "Cargo mass low enough for launch";
    }

  })
});





