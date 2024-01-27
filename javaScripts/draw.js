// Initialize the slider value
let feedTemperatureSlider;

function setup() {
  // Create a canvas to contain the slider
  createCanvas(400, 50).parent("slider-container");

  // Create the slider and set its initial value
  feedTemperatureSlider = createSlider(300, 400, 325);
  feedTemperatureSlider.position(10, 10);
  feedTemperatureSlider.style("width", "380px");
}

function draw() {
  // Clear the background
  background(220);

  // Display the slider value
  fill(0);
  text(`Feed Temperature: ${feedTemperatureSlider.value()} K`, 10, 40);

  // Update the graph based on the slider value
  const feedTemperature = feedTemperatureSlider.value();
  updateFeedTemperature(feedTemperature);
}
