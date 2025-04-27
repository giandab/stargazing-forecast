import calculation from "../logic/qualityCalculation";
import getData from "./getData";

export default async function Forecast({
    searchParams,
  }: {
    searchParams: { [key: string]: string | string[] | undefined };
  }){
    const userInput = await searchParams
    const date = await userInput["date"]
    const location = await userInput["location"]

    try{
    const dataResponse = await getData(date,location);
    const weatherData = dataResponse[1]
    const areaName = dataResponse[0]

    // console.log(weatherData)
    const quality = calculation(weatherData.hourly.cloudCover)
    

    return(<>
    <div className="formDiv">
    <h1>Forecast for: {areaName}</h1>
    </div>
    <div>
    <h1>Quality:  {quality}</h1>
    </div>
      
    </>)
    }
    catch{
      return(<h1 className="formDiv">Location Not Found or Date is out of range (2 weeks) !</h1>)
    }


}