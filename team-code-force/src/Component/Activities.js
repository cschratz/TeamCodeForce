import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Activities.css';


function Activities() {

  // Declare new state variables
  const [parkActivities, setParkActivities] = useState([]);
  const [userActivities, setUserActivities] = useState([]);
  const [resultingParks, setResultingParks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  // Park Activities Search click handler
  // Updates resulting parks with user selected activities
  const handleSearchClick = (event) => {
    const searchIds = userActivities.join(',');
    axios.get(`https://developer.nps.gov/api/v1/activities/parks?id=${searchIds}&api_key=gwHKy0xMUoHYHE6MhzXkBbKYuPcejjLlkuMpJdK0`)
      .then(res => {
        const currentParks = res.data.data;
        setResultingParks(currentParks);
      })
      .catch(error => {
        console.log(error)
      })
  }


  // Activities checkbox change handler
  // Updates user selected activities
  const handleChange = (event) => {
    // Declare variables for current event checkbox
    const checked = event.target.checked;
    const activityId = event.target.id;  // Only Activity IDs can be comma delimited when retrieving parks

    // Declare array variable for user selected activities
    const selectedIds = [...userActivities];

    // Find index of current activity in selected array
    const index = selectedIds.indexOf(activityId);

    // If checked and activity ID is not in selected array, add activity ID to array
    if (checked && index === -1) {
      selectedIds.push(activityId);
    } // Else if unchecked and activity ID is in selected array, remove activity ID from array
    else if (!checked && index > -1) {
      selectedIds.splice(index, 1);
    }

    setUserActivities(selectedIds);

    // // Multiple Select Box
    // // Declare variable for selected options
    // const selectedOptions = event.target.selectedOptions;

    // // Declare variable for favorites array
    // const selectedIds = Array.from(selectedOptions, (item) => item.id);

    // // Update favorite activities state
    // setUserActivities(selectedIds);
  }


  // Execute on every update to parkActivities
  useEffect(() => {
    // Confirm update of setParkActivities on page load
    console.log('Park Activities update', parkActivities);
  }, [parkActivities]);


  // Execute on every update to userActivities
  useEffect(() => {
    // Confirm update of setUserActivities in handleChange
    console.log('Favorites update', userActivities);
  }, [userActivities]);


  // Execute on every update to resultingParks
  useEffect(() => {
    // Confirm update of setResultingActivities in handleClick
    console.log('Search update', resultingParks);
  }, [resultingParks]);


  // Retrieve all activity categories in national parks upon initial rendering of page
  useEffect(() => {
    setIsLoading(true);
    axios.get('https://developer.nps.gov/api/v1/activities?api_key=gwHKy0xMUoHYHE6MhzXkBbKYuPcejjLlkuMpJdK0')
      .then(res => {
        const currentActivities = res.data.data;
        setParkActivities(currentActivities);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
      })
  }, [])


  // Render Activities component
  return (
    <div className="activities">
      {isLoading ? (
        <p>Loading . . . </p>
      ) : (
        <div className="activities-search">
          <form>
            <h5>Choose your favorite park activities:</h5>
            {parkActivities.map(({id, name}) => {
              return (
                <label>
                  <input type="checkbox" id={id} value={name} onChange={handleChange}/>
                  {name}
                  <br />
                </label>
              )
            })}
            {/* <select multiple={true} size={10} onChange={handleChange}>
              {parkActivities.map(({id, name}) => {
                return (
                  <option id={id} value={name}>{name}</option>
                )
              })}
            </select> */}
            <br />
            <button className="button" type="button" onClick={handleSearchClick} onclick="document.body.style.cursor='wait'; return true;">Search</button>
          </form>
          <hr />
          <h5>Parks with your favorite activities:</h5>
          <ul>
            {resultingParks.map(({id, name, parks}) => {
              return (
                <div className="selected-activity">
                  <li>{name}</li>
                  <br />
                  <ul>
                    {parks.map(({states, fullName, url}) => {
                      return (
                        <div className="activity-park">
                          <li><a href={url} target="_blank">{fullName}</a></li>
                        </div>
                      )
                    })}
                  </ul>
                  <br />
                </div>
              )
            })}
            </ul>
        </div>
      )}
    </div>
  )

}


export default Activities;