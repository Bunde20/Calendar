$(function () {
  // Current Day
  var today = dayjs().format("dddd, MMMM D ");
  $("#currentDay").append(today);

  var timeBlock = $(".time-block")
  var currentHour = dayjs().hour()

  timeBlock.each(function() {
    var blockValue = $(this).attr("id").slice(5)
    if(blockValue < currentHour) {
      $(this).children(".description").attr("class", "col-8 col-md-10 description past")
    } else if (blockValue > currentHour) {
      $(this).children(".description").attr("class", "col-8 col-md-10 description future")
    } else {
      $(this).children(".description").attr("class", "col-8 col-md-10 description present")
    }
  })

});
