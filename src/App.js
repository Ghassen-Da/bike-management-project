import Map from "./components/map"
import { useState, useEffect } from "react";


function App(){
  const url = "https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json";
    const [data, setData] = useState([]);
  
    const fetchInfo = () => {
      return fetch(url)
        .then((res) => res.json())
        .then((d) => setData(d))
    } 
    useEffect(() => {
      fetchInfo();
    }, []);
return (<Map stations={data?.data?.stations} />) 
}


export default App;