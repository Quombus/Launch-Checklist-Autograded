// Write your JavaScript code here!

window.addEventListener("load", function () {
    let pilot = this.document.getElementsByName("pilotName")[0];
    let copilot = this.document.getElementsByName("copilotName")[0];
    let fuelLevel = this.document.getElementsByName("fuelLevel")[0];
    let cargoMass = this.document.getElementsByName("cargoMass")[0];
    let form = this.document.getElementById("launchForm");

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })

});