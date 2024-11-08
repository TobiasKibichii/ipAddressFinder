import {useEffect, useState} from 'react';
import Axios from 'axios';
import Map from './components/map';
import './App.css';

function App() {

  const [ipDetails, setIpDetails] = useState([]);
  const [lat, setLat] = useState(22.3768);
  const [lon, setLon] = useState(80.1598);

  useEffect( () =>{
    Axios.get('https://ipapi.co/json/').then((res) =>{
      setIpDetails(res.data);
      setLat(res.data.latitude);
      setLon(res.data.longitude);
    });
},[])
  
  return (
    <>
    <h1 className="heading">IP Address Finder</h1>
     <div className="App">
    <div className="left">
      
      <h4>My IPv4 Address</h4>
      <h2 id="ip">{ipDetails.ip}</h2>
      <h4>Approximate Location</h4>
      <p>{ipDetails.city}, {ipDetails.region}, {ipDetails.country_name}</p>
      <h4>Internet Service Provider (ISP):</h4>
      <p>{ipDetails.org}</p>
    </div>
    <Map lat ={lat} lon ={lon}/>
    </div>
    </>
  );
}

export default App;
