$( function() {
  $( ".form__input--date" ).datepicker({
    showOn: "button",
    buttonImage: "img/calendar-dark.png",
    buttonImageOnly: true,
    buttonText: "Select date",
    dateFormat: "dd.mm.yy"
  });
});
