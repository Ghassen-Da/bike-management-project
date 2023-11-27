import Map from "./components/map"
import { useState, useEffect } from "react";


function App(){
  const url = process.env.REACT_APP_API_ENDPOINT;
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