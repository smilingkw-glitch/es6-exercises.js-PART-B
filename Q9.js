// 1. Create display functions (callbacks)
function displayCar() {
  console.log("This is a Car");
}

function displayTruck() {
  console.log("This is a Truck");
}

function displayBike() {
  console.log("This is a Bike");
}

// 2. Create Higher-Order Function
function vehicleInfo(vehicleCategory, callbackFn) {
  console.log("Vehicle Category:", vehicleCategory);
  callbackFn();
}

// 3. Call the HOF with different callbacks
vehicleInfo("Car", displayCar);
vehicleInfo("Truck", displayTruck);
vehicleInfo("Bike", displayBike);
