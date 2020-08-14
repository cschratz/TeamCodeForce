import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import SimpleMap from './Map';
import RouteForm from './RouteForm';
import { nps } from './.config';

function ParkPal({ user }) {
  const [parks, setParks] = useState([]);

  useEffect(() => {

  }, [parks]);

  const getPark = (userState) => {
    let state = userState.toLowerCase();
    if (state === 'alabama') {
      state = 'al';
    } else if (state === 'alaska') {
      state = 'ak';
    } else if (state === 'arizona') {
      state = 'az';
    } else if (state === 'arkansas') {
      state = 'ar';
    } else if (state === 'california') {
      state = 'ca';
    } else if (state === 'colorado') {
      state = 'co';
    } else if (state === 'Connecticut') {
      state = 'ct';
    } else if (state === 'delaware') {
      state = 'de';
    } else if (state === 'florida') {
      state = 'fl';
    } else if (state === 'georgia') {
      state = 'ga';
    } else if (state === 'alaska') {
      state = 'ak';
    } else if (state === 'hawaii') {
      state = 'hi';
    } else if (state === 'idaho') {
      state = 'id';
    } else if (state === 'illinois') {
      state = 'il';
    } else if (state === 'indiana') {
      state = 'in';
    } else if (state === 'iowa') {
      state = 'ia';
    } else if (state === 'kansas') {
      state = 'ks';
    } else if (state === 'kentucky') {
      state = 'ky';
    } else if (state === 'louisiana') {
      state = 'la';
    } else if (state === 'maine') {
      state = 'me';
    } else if (state === 'maryland') {
      state = 'md';
    } else if (state === 'massachusetts') {
      state = 'ma';
    } else if (state === 'michigan') {
      state = 'mi';
    } else if (state === 'minnesota') {
      state = 'mn';
    } else if (state === 'mississippi') {
      state = 'ms';
    } else if (state === 'missouri') {
      state = 'mo';
    } else if (state === 'montana') {
      state = 'mt';
    } else if (state === 'nebraska') {
      state = 'ne';
    } else if (state === 'nevada') {
      state = 'nv';
    } else if (state === 'new hampshire') {
      state = 'nh';
    } else if (state === 'new jersey') {
      state = 'nj';
    } else if (state === 'new mexico') {
      state = 'nm';
    } else if (state === 'new york') {
      state = 'ny';
    } else if (state === 'north carolina') {
      state = 'nc';
    } else if (state === 'north dakota') {
      state = 'nd';
    } else if (state === 'ohio') {
      state = 'oh';
    } else if (state === 'oklahoma') {
      state = 'ok';
    } else if (state === 'oregon') {
      state = 'or';
    } else if (state === 'pennsylvania') {
      state = 'pa';
    } else if (state === 'rhode island') {
      state = 'ri';
    } else if (state === 'south carolina') {
      state = 'sc';
    } else if (state === 'south dakota') {
      state = 'sd';
    } else if (state === 'tennessee') {
      state = 'tn';
    } else if (state === 'texas') {
      state = 'tx';
    } else if (state === 'utah') {
      state = 'ut';
    } else if (state === 'vermont') {
      state = 'vt';
    } else if (state === 'virginia') {
      state = 'va';
    } else if (state === 'washington') {
      state = 'wa';
    } else if (state === 'west virginia') {
      state = 'wv';
    } else if (state === 'wisconsin') {
      state = 'wi';
    } else if (state === 'wyoming') {
      state = 'wy';
    } else if (state === 'washington dc') {
      state = 'dc';
    }
    axios.get(`https://developer.nps.gov/api/v1/parks?stateCode=${state}&api_key=${nps.NPS_API_KEY}`)
      .then((res) => res.data.data.forEach((park) => {
        if (park.latitude.length && !parks.find((entry) => entry.name === park.name) && park.designation === 'National Park') {
          // eslint-disable-next-line no-shadow
          setParks((parks) => ([...parks, {
            lat: parseFloat(park.latitude), lng: parseFloat(park.longitude), name: `${park.name} ${park.designation}`, description: park.description, url: park.url, searchName: park.name, image: park.images[0].url,
          }]));
        }
      }));
  };

  return (
    <div className="ParkPal">
      <RouteForm getpark={getPark} />
      <SimpleMap parks={parks} user={user}/>
      <img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/US-NationalParkService-Logo.svg" alt="national parks" className="nps" />
    </div>
  );
}

export default ParkPal;
