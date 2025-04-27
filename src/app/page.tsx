
export default function Page() {

  return(<>
    <div className="formDiv">
  <form action={"/data"}>
  <h1 className="title">Stargazing Forecast</h1>
  <input type="date" name="date" placeholder="date"></input>
  <input type="text" name="location" placeholder="Location"></input>
  <input type="submit" value="submit" placeholder="Submit"></input>  
  </form>
  </div>
  </>)
}