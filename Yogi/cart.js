//Cart Modal Popup
$('.pricing').on("click", () => {
    $('.modal').css('display','block');
  });
  
//Listen for Close Click
$('.exitBtn').on("click", () => {
    $('.modal').css('display','none');
  });

  
//Cart Modal Background click Function 
$(window).on("click", (e) => {
    const target = $(e.target);
    if (target.is('.modal')) {
      $('.modal').css('display','none');
    } 
  });


// Add Yoga Classes to Modal Cart
$('.pricing').on("click", (e) => {
     const target = $(e.target);
     if (target.is('#drop-in')) {
       $('#add-dropin').css('display','flex');
      }
      else if (target.is('#pkg10')) {
        $('#add-10').css('display','flex');
      }
      else if (target.is('#yrly')) {
        $('#add-yrly').css('display','flex');
      }
  });

//Remove Yoga Class from Modal Cart
$('.removebtns').on("click", (e) => {
  const rmbtnClicked = $(e.target);
  $(rmbtnClicked).parent().parent().remove();
});







