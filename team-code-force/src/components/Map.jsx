/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import { google } from './.config';

const Map = ({ parks, user }) => {
  const [myMarkers, setMarkers] = React.useState([]);
  const [mapReference, setMapReference] = useState(null);
  const [mapsReference, setMapsReference] = useState(null);
  const [center, setCenter] = useState({ lat: 39.82, lng: -98.57 });
  const [start, setStart] = useState('');

  useEffect(() => {
    setMarkers(parks);
    setCenter({ lat: 39.82, lng: -98.57 });
  }, [parks]);

  const handleStart = (event) => {
    setStart(event.target.value);
  };

  const handleDirections = () => {
    const waypnts = [];

    myMarkers.forEach((park, index) => {
      if (index === myMarkers.length - 1) {
        return;
      }
      waypnts.push({
        location: park.name,
        stopover: true,
      });
    });

    const directionsService = new mapsReference.DirectionsService();
    const directionsDisplay = new mapsReference.DirectionsRenderer();
    directionsService.route({
      origin: start,
      destination: myMarkers[myMarkers.length - 1].name,
      waypoints: waypnts,
      travelMode: 'DRIVING',
      optimizeWaypoints: true,
    }, (response, status) => {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
        //
        const routePolyline = new mapsReference.Polyline({
          path: response.routes[0].overview_path,
        });
        routePolyline.setMap(mapReference);
      } else {
        console.error(`Directions request failed due to ${status}`);
      }
    });
  };

  const onKeyUp = (event) => {
    if (event.keyCode === 13) {
      handleDirections(start);
      setStart('');
    }
  };

  return (
    <div>
      <br />
      <div>
        <label>
          Where Are You Starting From?
          <br />
          <br />
          <input type="text" placeholder="Starting Point" value={start} onChange={handleStart} onKeyUp={onKeyUp} />
        </label>
        <button
          onClick={() => {
            handleDirections(start);
            setStart('');
          }}
          type="submit"
        >
          Get Route!
        </button>
      </div>
      <br />
      <div style={{ height: '80vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: google.MAPS_API_KEY }}
          center={center}
          zoom={5}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => {
            setMapReference(map);
            setMapsReference(maps);
          }}
        >
          {myMarkers.map((park) => (
            <Marker
              key={park.url}
              lat={park.lat}
              lng={park.lng}
              name={park.name}
              searchName={park.searchName}
              url={park.url}
              desc={park.description}
              imagePark={park.image}
              user={user}
            />
          ))}
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
