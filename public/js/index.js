$(document).ready(() => {
  console.log("document ready");
  $("#flag-form").submit(event => {
    // event.preventDefault();
    console.log("Form submitted");
  });
});
