$(function () {
  // Current Day
  var timeBlock = $(".time-block")
  var save = $(".saveBtn")

  $("#currentDay").append(today);
  var today = dayjs().format("dddd, MMMM D ");
  var currentHour = dayjs().hour()

  timeBlock.each(function () {
    var blockValue = $(this).attr("id").slice(5)
    if (blockValue < currentHour) {
      $(this).children(".description").attr("class", "col-8 col-md-10 description past")
    } else if (blockValue > currentHour) {
      $(this).children(".description").attr("class", "col-8 col-md-10 description future")
    } else {
      $(this).children(".description").attr("class", "col-8 col-md-10 description present")
    }
  })

  save.on("click", function (event) {
    event.preventDefault()
    var key = $(this).parent().attr("id")
    var value = $(this).siblings(".description").val()
  
     localStorage.setItem(key,value )
  })

});
