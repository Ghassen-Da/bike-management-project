import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import StationDetails from './station-details';


const containerStyle = {
  width: '100vw',
  height: '100vh'
};

const center = {
  lat: 59.936006155097004,
  lng: 10.73190903696522
};

export default function Map(props) {
  // This variable is responsible for the dialog box
  const [open, setOpen] = React.useState(false);
  
  // This variable is responsible for the data of the dialog box
  const [selectedStation, setSelectedStation] = React.useState({});

  let stations = props.stations
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_MAP_API_KEY
  })
    
  const onLoad = React.useCallback(function callback(map) {
    map.setZoom(14)
  }, [])

  // Responsible for opening the dialog box
  function handleDialogOpen(station){
    setSelectedStation(station);
    setOpen(true);
  }
  
  // Responsible for closing the dialog box
  let handleDialogClose = () =>{
    setOpen(false);
  }

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={1}
        onLoad={onLoad}
      >
        {stations?.map(station=> {
          // Only display Marker when station details available.
          if (station?.station_id && station?.lon && station?.lat && station?.capacity) 
            return(
              // Custom Marker to match the design given in the UI
              <Marker
              key={station?.station_id}
                icon={{
                  path: window.google.maps.SymbolPath.CIRCLE,
                  scale: 5,    
                  fillColor: "black",
                  fillOpacity: 1
                }}
                position={{lat: station?.lat,lng: station?.lon}}
                label={{text:station?.capacity.toString(),color:'#fff', fontSize:"8px"}}
                onClick={()=>handleDialogOpen(station)}
              />      
            )
            return null
          }
          )
        }
        {/* Dialog component that gives station details */}
        <StationDetails
          open={open}
          onClose={handleDialogClose}
          station={selectedStation}
        />
      </GoogleMap>
  ) : <></>
}
