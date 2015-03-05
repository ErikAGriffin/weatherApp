$(document).ready(function() {

  $.ajax({
    url: "http://weather-api.herokuapp.com/cities",
    type: "GET",
    dataType: "jsonp",
    success: function(response) {
      $.each(response.cities, function(index, city) {
        $('.cities').append(
          $("<option></option>").val(city).html(city.capitalize()+" ⌄")
        );
      });
    }
  });

  $('select').change(function() {
      var city = $("select option:selected").val();
      var url =  "http://weather-api.herokuapp.com/temperature?city="+city;
    $.ajax({
      url: url,
      dataType: "jsonp",
      success: function(data) {
        $('.temperature').html(data.temp);
        $('img').attr('src', 'images/'+data.outlook+'.svg');
      }
    });

  });

});

String.prototype.capitalize = function() {
    return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};


