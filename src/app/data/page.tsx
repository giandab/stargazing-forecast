import calculation from "../logic/qualityCalculation";
import getData from "./getData";

export default async function Forecast({
    searchParams,
  }: {
    searchParams: Promise<{ [key: string]: string | string }>;
  }){
    const userInput = await searchParams
    const date = userInput["date"]
    const location = userInput["location"]

    try{
    const dataResponse = await getData(date,location);
    const weatherData = dataResponse[1]
    const areaName = dataResponse[0]
    const percentage_cover_at_night = await calculation(weatherData.hourly.cloudCover)
    

    if (percentage_cover_at_night <25){
          return(<>
    <div className="formDiv">
    <h1>Forecast for: {areaName}</h1>
    </div>
    <div>
    <h1>Quality: </h1>
    <h1 style={{color:'green'}}>Good</h1>
    <br></br>
    <h1> Cloud cover between 10pm and midnight: {percentage_cover_at_night}%</h1>
    </div>
      
    </>)
    } else if(percentage_cover_at_night<50){
                  return(<>
    <div className="formDiv">
    <h1>Forecast for: {areaName}</h1>
    </div>
    <div>
    <h1>Quality: </h1>
    <h1 style={{color:'yellow'}}>Moderate</h1>
    <br></br>
    <h1> Cloud cover between 10pm and midnight: {percentage_cover_at_night}%</h1>
    </div>
      
    </>)
    } else{
      return(<>
    <div className="formDiv">
    <h1>Forecast for: {areaName}</h1>
    </div>
    <div>
    <h1>Quality: </h1>
    <h1 style={{color:'red'}}>Poor</h1>
    <br></br>
    <h1> Cloud cover between 10pm and midnight: {percentage_cover_at_night}%</h1>
    </div>
      
    </>)
    }

    }
    catch{
      return(<h1 className="formDiv">Location Not Found or Date is out of range (2 weeks) !</h1>)
    }


}