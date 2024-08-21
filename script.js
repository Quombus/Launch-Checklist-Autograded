window.addEventListener("load", function () {
  let pilot = this.document.getElementsByName("pilotName")[0];
  let copilot = this.document.getElementsByName("copilotName")[0];
  let fuelLevel = this.document.getElementsByName("fuelLevel")[0];
  let cargoMass = this.document.getElementsByName("cargoMass")[0];
  let form = this.document.getElementById("launchForm");
  let list = this.document.getElementById("faultyItems");
  
  let missionTarget = this.document.getElementById("missionTarget");
  let input = this.document.getElementById("formSubmit");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoMass.value);
  });

  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse.then(function (result) {
    listedPlanets = result;
    console.log(listedPlanets);

    // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination
    let planet = pickPlanet(listedPlanets);

    addDestinationInfo(
      missionTarget,
      planet.name,
      planet.diameter,
      planet.star,
      planet.distance,
      planet.moons,
      planet.image
    );
  });
  input.addEventListener("keyup", function (event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      editbutton.click();
    }
  });
});
