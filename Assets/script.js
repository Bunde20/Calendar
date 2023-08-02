$(function () {
  // Current Day
  var timeBlock = $(".time-block");
  var save = $(".saveBtn");
  var alert = $(".alert");

  var today = dayjs().format("dddd, MMMM D ");
  $("#currentDay").append(today);
  var currentHour = dayjs().hour();

  timeBlock.each(function () {
    var blockValue = $(this).attr("id").slice(5)
    if (blockValue < currentHour) {
      $(this).children(".description").attr("class", "col-8 col-md-10 description past")
    } else if (blockValue > currentHour) {
      $(this).children(".description").attr("class", "col-8 col-md-10 description future")
    } else {
      $(this).children(".description").attr("class", "col-8 col-md-10 description present")
    }
  });

  save.on("click", function (event) {
    event.preventDefault();
    var key = $(this).parent().attr("id");
    var value = $(this).siblings(".description").val();
    var alertMessage = $("<h3></h3>");
    alertMessage.text("Event added to localStorage \u2705");
    alert.append(alertMessage);

    localStorage.setItem(key, value);

    setTimeout(function() {
      alertMessage.remove();
    }, 1500);
  });

  for (var i = 9; i <= 17; i++) {
    $(`#hour-${i} textarea`).val(localStorage.getItem(`hour-${i}`))
  };
});


