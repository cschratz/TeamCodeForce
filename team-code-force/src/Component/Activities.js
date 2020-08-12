import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {activitiesData} from '../Data/activitiesData'

// Activities function component
function Activities() {
  // Declare new state variables
  const [activities, setActivities] = useState(activitiesData.data);
  const [favoriteActivities, setFavoriteActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleSubmit = (event) => {
    alert("Submit received")
  }

  const handleChange = (event) => {
    // Declare variables for check box
    const checked = event.target.checked;
    const activity = event.target.value;

    // Declare variable for favorites array
    const favorites = [...favoriteActivities];

    const index = favorites.indexOf(activity)

    // Check if check box is checked or unchecked
    // and check if value is in favorites array . . . 
    // If checked and not in favorites, add activity to favorites array
    if (checked && index === -1) {
      favorites.push(activity);
    } // If unchecked and in favorites, remove activity from favorites array
    else if (!checked && index > -1) {
      favorites.splice(index, 1);
    }

    // // Declare variable for selected options
    // const selectedOptions = event.target.selectedOptions;

    // // Declare variable for favorites array
    // const favorites = Array.from(selectedOptions, (item) => item.value);


    // Update favorite activities state
    setFavoriteActivities(favorites);
  }

  // Favorite Activities 'componentDidUpdate'
  useEffect(() => {
    // Confirm update of setFavoriteActivities in handleChange
    console.log(favoriteActivities);
  }, [favoriteActivities]);

  // Activities 'ComponentDidMount'
  // useEffect is executed on every component rendering 
  // unless an empty array is passed as second argument 
  useEffect(async () => {
  //   // axios.get('/activities')
  //   console.log(process.env.NPS_API_KEY)
    debugger
  //   axios({
  //     "method": "GET",
  //     "url": "https://developer.nps.gov/api/v1/activities",
  //     "headers": {
  //       "content-type": "application/json"
  //     }, "params": {
  //       "api_key": "MKgidX2cBdr771714Q0NFhXdD5HMotDBCFyvFbJj"
  //     }
  //   })
  //     // .then(res => res.json())
  //     .then(response => {
  //       console.log(response)
  //       debugger
  //       setActivities(response.items);
        setIsLoading(false);
  //     })
  //     .catch(error => {
  //       debugger
  //       console.log(error)
  //     })
  }, [])

  // render Activities
  return (
    <div>
      {isLoading ? (
        <p>Loading . . . </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <h5>Choose your favorite park activities:</h5>
          {activities.map(({id, name}) => {
            return (
              <label>
                <input type="checkbox" key={id} value={name} onChange={handleChange}/>
                {name}
                <br />
              </label>
            )
          })}
          {/* <select multiple={true} size={10} onChange={handleChange}>
            {activities.map(activity => {
              return (
                <option value={activity.name}>{activity.name}</option>
              )
            })}
          </select> */}
          <br />
          <input type="submit" value="Search/Save" />
        </form>
      )}
    </div>
  )
}

export default Activities