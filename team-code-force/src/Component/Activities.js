import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Activities.css';


// Activities function component
function Activities() {

  // Declare new state variables
  const [parkActivities, setParkActivities] = useState([]);
  const [userActivities, setUserActivities] = useState([]);
  const [resultingParks, setResultingParks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Park Activities Search button click handler
  // Updates resulting parks with user selected activities
  const handleClick = (event) => {
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
    const activityId = event.target.id;  // Activity IDs can be used to retrieve parks with particular activity (comma delimited)

    // Declare array variable for user selected activities
    const selectedIds = [...userActivities];

    // Index of current activity in user selected array
    const index = selectedIds.indexOf(activityId);

    // If checked and activity ID is not in user selected array, add activity ID to array
    if (checked && index === -1) {
      selectedIds.push(activityId);
    } // Else if unchecked and activity ID is in user selected array, remove activity ID from array
    else if (!checked && index > -1) {
      selectedIds.splice(index, 1);
    }

    // Update user activities state
    setUserActivities(selectedIds);
  }


  // Park Activities 'ComponentDidUpdate'
  // useEffect is executed on every parkActivities update
  useEffect(() => {
    // Confirm update of setParkActivities in useEffect
    console.log('Park Activities update', parkActivities);
  }, [parkActivities]);


  // User Activities 'ComponentDidUpdate'
  // useEffect is executed on every userActivities update
  useEffect(() => {
    // Confirm update of setUserActivities in handleChange
    console.log('Favorites update', userActivities);
  }, [userActivities]);


  // Resulting Parks 'ComponentDidUpdate'
  // useEffect is executed on every resultingParks update
  useEffect(() => {
    // Confirm update of setResultingActivities in handleClick
    console.log('Search update', resultingParks);
  }, [resultingParks]);


  // Park Activities 'ComponentDidMount'
  // Lists all park activities available 
  // useEffect is executed on every component rendering/updating
  // unless an empty array is passed as second argument
  useEffect(async () => {
    setIsLoading(true);
    axios.get('https://developer.nps.gov/api/v1/activities?api_key=gwHKy0xMUoHYHE6MhzXkBbKYuPcejjLlkuMpJdK0')
      .then(res => {
        const currentActivities = res.data.data;
        setParkActivities(currentActivities);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error)
      })
  }, [])


  // render Activities
  return (
    <div>
      {isLoading ? (
        <p>Loading . . . </p>
      ) : (
        <div>
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
            <br />
            <button type="button" onClick={handleClick}>Search / Save</button>
          </form>
          <hr />
          <h5>Parks with your favorite activities:</h5>
          <ul>
            {resultingParks.map(({id, name, parks}) => {
              return (
                <div>
                  <li>{name}</li>
                  <br />
                  <ul>
                    {parks.map(({states, fullName, url}) => {
                      return (
                        <div>
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


export default Activities