// // Initialize the slider value
// let feedTemperatureSlider;

// function setup() {
//   // Create a canvas to contain the slider
//   createCanvas(600, 50).parent("graph-container");

//   // Create the slider and set its initial value
//   molarRatioSlider = createSlider(0.0, 1, 0.2).parent("graph-container");
//   molarRatioSlider.style("width", "250px");
//   feedTemperatureSlider = createSlider(300, 400, 325).parent("graph-container");
//   feedTemperatureSlider.style("width", "250px");
// }

// function draw() {
//   // Clear the background
//   background(255);

//   // Display the slider value
//   fill(0);
//   text(
//     `Molar Ratio of Inert to Reactant in Feed: ${molarRatioSlider.value()} K`,
//     10,
//     40
//   );
//   text(`Feed Temperature: ${feedTemperatureSlider.value()} K`, 10, 30);

//   // Update the graph based on the slider value
//   const feedTemperature = feedTemperatureSlider.value();
//   const molarRatio = molarRatioSlider.value();

//   updateFeedTemperature(feedTemperature);
//   updateMolarRatio(molarRatio);
// }
