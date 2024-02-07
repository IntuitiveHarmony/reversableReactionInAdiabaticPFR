$(() => {
  // Toggle pop-up modals
  $("#directions-button").click(() => {
    $(".overlay").removeClass("hide");
    $(".directions-container").addClass("modal");
    $(".directions-container").removeClass("hide");
  });
  $("#details-button").click(() => {
    $(".overlay").removeClass("hide");
    $(".details-container").addClass("modal");
    $(".details-container").removeClass("hide");
  });
  $("#about-button").click(() => {
    $(".overlay").removeClass("hide");
    $(".about-container").addClass("modal");
    $(".about-container").removeClass("hide");
  });
  // Close the Modals
  $(".close-modal-toggle").click(() => {
    console.log("modal closed");
    $(".overlay").addClass("hide");
    // target each container specifically
    $(".directions-container").addClass("hide");
    $(".directions-container").removeClass("modal");
    $(".details-container").addClass("hide");
    $(".details-container").removeClass("modal");
    $(".about-container").addClass("hide");
    $(".about-container").removeClass("modal");
  });
});
