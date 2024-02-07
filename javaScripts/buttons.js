$(() => {
  // Toggle pop-up modal and graph
  $("#directions-button").click(() => {
    console.log("Directions Clicked");
    // $(".directions-container").css({
    //   display: "block",
    // });
    $(".overlay").removeClass("hide");
    $(".directions-container").addClass("modal");
    $(".directions-container").removeClass("hide");
  });
  // Close the Modals
  $(".close-modal-toggle").click(() => {
    console.log("modal closed");
    $(".overlay").addClass("hide");
    $(".directions-container").addClass("hide");
    $(".directions-container").removeClass("modal");
  });
});
