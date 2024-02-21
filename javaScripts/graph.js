// Constants for the graphs with reaction conditional
let reaction = true; // true-exothermic false-endothermic

let Km = 0.12; // Equilibrium constant at reference temperature
let deltaH = -83680; // Heat of reaction (J/mol)
let R = 8.314; // Ideal gas constant (J/(mol K))
let Tm = 500; // Reference temperature (K)

let alpha = 1; // Adjust as needed
let Cp = 209; // Adjust as needed

function toggleGraph() {
  if (reaction) {
    Km = 0.12;
    deltaH = -83680;
    Cp = 209;
    console.log("exo");
  } else {
    Km = 10;
    deltaH = 65000;
    Cp = 175;
    console.log("endo");
  }
  equilibriumConversionFromKeCurve.updateCoords();
  equilibriumConversionFromKeCurve.drawCurve();
  equilibriumConversionFromEnergyBalanceCurve.updateCoords();
  equilibriumConversionFromEnergyBalanceCurve.drawCurve();
}

// variable for the Feed temperature of the graph
let Tf = 325;
// variable for the Molar Ratio of the graph
let Mr = 0.2;

const graph = new SVG_Graph({
  id: "svg-plot-0", // id of the container element
  classList: ["svg-plot"], // classes to add to the plot container element
  title: "A ⇌ B", // text above the plot
  titleFontSize: 20, // font size of title, pixels
  padding: [
    [60, 20],
    [30, 50],
  ], // amount of padding (pixels) around the [[left, right], [top, bottom]] axes.
  // parent: document.getElementById("defaultCanvas0"), // the element to place the plot within.  If a parent is specified (besides document.body), the plot size will be 100% of parent's width and height.
  parent: document.getElementById("graph-container"), // the element to place the plot within.  If a parent is specified (besides document.body), the plot size will be 100% of parent's width and height.
  // parent: document.body, // the element to place the plot within.  If a parent is specified (besides document.body), the plot size will be 100% of parent's width and height.
  axes: {
    axesStrokeWidth: 0.5, // stroke width of the axes lines: the vertical and horizontal x and y-axes (px)
    x: {
      labels: ["", "temperature (K)"], // labels to add above the top x-axis and below the bottom x-axis
      labelFontSize: 17, // font size of the label(s) (px)
      display: [true, true], // choose whether to display the [top, bottom] x axes
      range: [300, 550], // the minimum and maximum values on the x-axis
      step: 50, // the numerical distance between major ticks on the x-axis
      minorTicks: 3, // number of minor ticks to put between each major tick
      majorTickSize: 2, // the length (px) of the major ticks on the x-axis
      minorTickSize: 1, // the length (px) of the minor ticks on the x-axis
      tickLabelFontSize: 14, // font size of the tick labels (the numbers below the major ticks)
      tickWidth: 0.5, // stroke width of the ticks (px)
      tickLabelPrecision: 0, // digits of precision for the x-axis tick labels
      showZeroLabel: true, // choose whether or not the "zero" value is displayed on the bottom-left part of the graph
    },
    y: {
      labels: ["conversion", ""],
      labelFontSize: 17,
      display: [true, true],
      range: [0, 1.01],
      step: 0.2,
      minorTicks: 3,
      majorTickSize: 2,
      minorTickSize: 1,
      tickLabelFontSize: 14,
      tickWidth: 0.5,
      tickLabelPrecision: 1,
      showZeroLabel: true,
    },
  },
});

// Equilibrium conversion calculated from equilibrium constant
// Black Line
function equilibriumConversionFromKe(T) {
  // const Km = 0.12; // Equilibrium constant at reference temperature
  // const deltaH = -50000; // Heat of reaction (J/mol)
  // const R = 8.314; // Ideal gas constant (J/(mol K))
  // const Tm = 500; // Reference temperature (K)

  const Ke = Km * Math.exp((deltaH / R) * (1 / Tm - 1 / T));
  return Ke / (1 + Ke);
}

// Equilibrium conversion calculated from energy balance
// Blue Line
function equilibriumConversionFromEnergyBalance(T) {
  // const alpha = 1; // Adjust as needed
  // const Cp = 50; // Adjust as needed
  // const deltaH = -50000; // Heat of reaction (J/mol)

  const Xeb = ((alpha + Mr) * Cp * (T - Tf)) / -deltaH;
  console.log("Molar Ratio: ", Mr);
  return Xeb;
}

// Curve options for equilibrium conversion from Ke
const equilibriumConversionFromKeOptions = {
  stroke: "rgba(0, 0, 0, 1)",
  strokeWidth: 2,
  resolution: 100,
  fill: "none",
  id: "equilibrium-conversion-from-ke-curve",
  classList: ["equilibrium-conversion-curve"],
};

// Curve options for equilibrium conversion from energy balance
const equilibriumConversionFromEnergyBalanceOptions = {
  stroke: "rgba(0, 0, 255, 1)",
  strokeWidth: 2,
  resolution: 100,
  fill: "none",
  id: "equilibrium-conversion-from-energy-balance-curve",
  classList: ["equilibrium-conversion-curve"],
};

// Add the equilibrium conversion curves to the graph
const equilibriumConversionFromKeCurve = graph.addCurve(
  equilibriumConversionFromKe,
  equilibriumConversionFromKeOptions
);
const equilibriumConversionFromEnergyBalanceCurve = graph.addCurve(
  equilibriumConversionFromEnergyBalance,
  equilibriumConversionFromEnergyBalanceOptions
);

// Functions that update the graph based on the sliders
function updateFeedTemperature(feedTemperature) {
  // Update the graph with the new feed temperature
  // Adjust the energy balance curve options
  Tf = feedTemperature;

  // Redraw the energy balance curve
  equilibriumConversionFromEnergyBalanceCurve.updateCoords();
  equilibriumConversionFromEnergyBalanceCurve.drawCurve();

  // Update the HTML with slider value
  document.getElementById("temperatureValue").innerText =
    "Feed Temperature: " + feedTemperature + " (K)";
}

function updateMolarRatio(molarRatio) {
  // Update the graph with the new feed temperature
  // Adjust the energy balance curve options
  Mr = molarRatio;

  // Redraw the energy balance curve
  equilibriumConversionFromEnergyBalanceCurve.updateCoords();
  equilibriumConversionFromEnergyBalanceCurve.drawCurve();

  // Update the HTML with slider value
  document.getElementById("molarRatioValue").innerText =
    "Molar Ratio of Inert to Reactant in Feed: " + molarRatio;
  // console.log("Mr: ", Mr);
}
// Pass the function to the draw
// window.updateFeedTemperature = updateFeedTemperature;
// window.updateMolarRatio = updateMolarRatio;

$(() => {
  // Update the constants of the graph based on which reaction button is clicked
  $("#exothermic-btn").click(() => {
    reaction = true;
    // Change Min and Max of the slider
    $("#temperature-slider").attr({
      min: 300,
      max: 400,
    });
    toggleGraph();
  });
  $("#endothermic-btn").click(() => {
    reaction = false;
    // Change Min and Max of the slider
    $("#temperature-slider").attr({
      min: 400,
      max: 500,
    });
    toggleGraph();
  });
});
