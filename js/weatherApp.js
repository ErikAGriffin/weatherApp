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

  String.prototype.capitalize = function() {
      return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
  };

  $('select').change(function() {
    $("select option:selected").each(function() {
      console.log(this);
    });
  }).trigger("change");

});