jQuery(function() {
  var church_url = "lifechurch-tv.churchonline.org";
  var days, goLive, hours, intervalId, minutes, seconds;
  goLive = function() {
    $("#churchonline_counter").hide();
    return $("#counter_live").show();
  };
  days = void 0;
  hours = void 0;
  minutes = void 0;
  seconds = void 0;
  intervalId = void 0;
  return $.ajax({
    url: "http://" + church_url + "/api/v1/events/current",
    dataType: "json",
    success: function(data) {
      var seconds_till;
      $("#churchonline_counter").show();
      if (data.response.item.isLive) {
        return goLive();
      } else {
        seconds_till = ((new Date(data.response.item.eventStartTime)) - (new Date())) / 1000;
        days = Math.floor(seconds_till / 86400);
        hours = Math.floor((seconds_till % 86400) / 3600);
        minutes = Math.floor((seconds_till % 3600) / 60);
        seconds = Math.floor(seconds_till % 60);
        return intervalId = setInterval(function() {
          if (--seconds < 0) {
            seconds = 59;
            if (--minutes < 0) {
              minutes = 59;
              if (--hours < 0) {
                hours = 23;
                if (--days < 0) {
                  days = 0;
                }
              }
            }
          }
          $("#churchonline_counter .days").html((days.toString().length < 2) ? "0"+days : days);
          $("#churchonline_counter .hours").html((hours.toString().length < 2 ? "0" + hours : hours));
          $("#churchonline_counter .minutes").html((minutes.toString().length < 2 ? "0" + minutes : minutes));
          $("#churchonline_counter .seconds").html((seconds.toString().length < 2 ? "0" + seconds : seconds));
          if (seconds === 0 && minutes === 0 && hours === 0 && days === 0) {
            goLive();
            return clearInterval(intervalId);
          }
        }, 1000);
      }
    },
    error: function(xhr, ajaxOptions, thrownError) {
      return console.log(thrownError);
    }
  });
});
