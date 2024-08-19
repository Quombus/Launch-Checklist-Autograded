const formSubmission = require('./scriptHelper');
const myFetch = require('./scriptHelper');
const addDestinationInfo = require('./scriptHelper');
const pickPlanet = require('./scriptHelper');

window.addEventListener("load", function () {
    
    let pilot = this.document.getElementsByName("pilotName")[0];
    let copilot = this.document.getElementsByName("copilotName")[0];
    let fuelLevel = this.document.getElementsByName("fuelLevel")[0];
    let cargoMass = this.document.getElementsByName("cargoMass")[0];
    let form = this.document.getElementById("launchForm");
    let h2 = document.getElementById("launchStatus");
    let list = document.getElementById("faultyItems");
    let missionTarget = this.document.getElementById("missionTarget");

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        formSubmission(h2, list, pilot, copilot, fuelLevel, cargoMass);
    })

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination
        let planet = pickPlanet(listedPlanets);
        console.log(planet);

        addDestinationInfo(missionTarget, planet.name, planet.diameter, planet.star, planet.distance,planet.moons, planet.image);

        
})
})

