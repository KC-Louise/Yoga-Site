//Listen for Open Click
$('#view-schedule').on("click", () => {
  $('.modal').css('display','block');
});

//Listen for Close Click
$('.exitBtn').on("click", () => {
  $('.modal').css('display','none');
});

//Modal Background click Function
$(window).on("click", (e) => {
  const target = $(e.target);
  if (target.is('.modal')) {
    $('.modal').css('display','none');
  }
});

//Function to Switch of Daily Schedule
function switchSchedule () {
  const input = $(this).val();
  let classDay = new Date(input).getDay();
  //getDay takes the date and returns a number for each day of the week (Monday = 0, Tuesday = 1, Wednesday = 2, Thursday = 3, Friday = 4, Saturday = 5, Sunday = 6)

//Switch code blocks for each day of the week
  switch (classDay) {
    case 0:
      $('#mondays').addClass('current');
      $('#tuesdays, #wednesdays, #thursdays, #fridays, #saturdays, #sundays').removeClass('current');
      break;
    case 1:
      $('#tuesdays').addClass('current');
      $('#mondays, #wednesdays, #thursdays, #fridays, #saturdays, #sundays').removeClass('current');
      break;
    case 2:
      $('#wednesdays').addClass('current');
      $('#mondays, #tuesdays, #thursdays, #fridays, #saturdays, #sundays').removeClass('current');
    break;
    case 3:
      $('#thursdays').addClass('current');
      $('#mondays, #tuesdays, #wednesdays, #fridays, #saturdays, #sundays').removeClass('current');
      break;
    case 4:
      $('#fridays').addClass('current');
      $('#mondays, #tuesdays, #wednesdays, #thursdays, #saturdays, #sundays').removeClass('current');
      break;
    case 5:
      $('#saturdays').addClass('current');
      $('#mondays, #tuesdays, #wednesdays, #thursdays, #fridays, #sundays').removeClass('current');
      break;
    case 6:
      $('#sundays').addClass('current');
      $('#mondays, #tuesdays, #wednesdays, #thursdays, #fridays, #saturdays').removeClass('current');
      break;
  }
  
};

//Switch schedule on calendar change
$('#class-calendar').on('change', switchSchedule);

///Checkbox Functioning
$('#view-schedule').click(() => {
  $('#check-yin').click(() => {
      $('.vinyasa-schedule, .bikram-schedule, .no-classes').toggle('hidden');
    })

  $('#check-bikram').click(() => {
          $('.vinyasa-schedule, .yin-schedule, .no-classes').toggle('hidden');
        })
    
  $('#check-vinyasa').click(() => {
          $('.yin-schedule, .bikram-schedule, .no-classes').toggle('hidden');
        })
});


  