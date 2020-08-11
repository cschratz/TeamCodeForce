import React, { useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

const Map = (props) => {

  const [myMarkers, setMarkers] = React.useState([]);

  const [center, setCenter] = React.useState({ lat: 39.82, lng: -98.57 });

  useEffect(() => {
    setMarkers(props.parks);
    setCenter({ lat: 39.82, lng: -98.57 });
  }, [props.parks])

  const handleApiLoaded = (map, maps, myMarkers) => {
    console.log('test')
    const directionsService = new maps.DirectionsService();
    const directionsDisplay = new maps.DirectionsRenderer();
    directionsService.route({
      origin: 'New Orleans, LA',
      destination: 'Memphis, TN',
      waypoints: [{location: 'Mobile AL'}],
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
        const routePolyline = new maps.Polyline({
          path: response.routes[0].overview_path
        });
        routePolyline.setMap(map);
      } else {
        window.alert('Directions request failed due to ' + status);
        }
      });
};

  return (
    <div>
    <div style={{ height: '80vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        center={center}
        zoom={5}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps, myMarkers)}
      >
        {myMarkers.map(park => (
          <Marker
          key={park.url}
          lat={park.lat}
          lng={park.lng}
          name={park.name}
          url={park.url}
          />
        ))}
      </GoogleMapReact>
    </div>
    </div>
  );
};

export default Map;

