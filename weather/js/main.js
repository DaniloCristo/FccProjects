$(document).ready(function(){

  if(navigator.geolocation) {

       navigator.geolocation.getCurrentPosition(function(position){
          //store the latitude and longitude
          let latitude = position.coords.latitude;
          let longitude = position.coords.longitude;


            // using fcc api to get the currentweather
           $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat="+latitude+"&lon="+longitude+"",function(data){
                  //store the data from the api
                  let temp = data.main.temp;
                  let cidade = data.name;
                  let main = data.weather[0].main;
                  let desc = data.weather[0].description;
        
                  //showing the data
                  $("#main").html(main);
                  $("#desc").html(desc);
                  $("#cidade").html(cidade);
                  $("#temperatura").html(temp+"°C");
                                    
                  //temp in fahrenheit
                  $("#fahrenheit").click(function(){
                      let f = (temp*1.8) + 32;
                      let f_decimal = f.toFixed(2);
                      $("#temperatura").html(f_decimal);
                  });

                  //temp in celsius
                  $("#celsius").click(function(){
                    $("#temperatura").html(temp+"°C");
                  });
      });
    
    });
  }
});