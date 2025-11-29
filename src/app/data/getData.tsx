import { fetchWeatherApi } from 'openmeteo';

export default async function getData(date:string,location:string) {

    // console.log(date);
    // console.log(location);

    const geocoding = await fetch("https://nominatim.openstreetmap.org/search?q="+location+"&format=json")
    const data = await geocoding.json();
    // console.log("geocoding data: ",data)

    const latitude = data[0].lat
    const longtitude = data[0].lon
    // console.log("DEBUG"+latitude)
    // console.log("DEBUG"+longtitude)
    // console.log("DEBUG"+data[0].display_name)
    
    const params = {
        "latitude": latitude,
        "longitude": longtitude,
        "hourly": "cloud_cover",
        "start_date": date,
	    "end_date": date
    };
    const url = "https://api.open-meteo.com/v1/forecast";
    const responses = await fetchWeatherApi(url, params);
    const response = responses[0];
    // console.log("Weather data response", response)
    const utcOffsetSeconds = response.utcOffsetSeconds();
   
    const hourly = response.hourly()!;
    const weatherData = {
        hourly: {
            time: [...Array((Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval())].map(
                (_, i) => new Date((Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) * 1000)
            ),
            cloudCover: hourly.variables(0)!.valuesArray()!,
        },
    };

    return [data[0].display_name,weatherData]
    }